import { createContext, useState } from "react";
import { toast } from "sonner";
import axios from 'axios';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';



export const AppContext = createContext()

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null)
    const [showLogin, setShowLogin] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [credit, setCredit] = useState(false)

    const [users, setUsers] = useState([]);
    const [transactions, setTransactions] = useState([]);

    const [gender, setGender] = useState(user?.gender || "");
    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const navigate = useNavigate()


    const loadCreditsData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/credits', { headers: { token } })

            if (data.success) {
                setCredit(data.credits)
                setUser(data.user)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)

        }
    }


    const generateImage = async (prompt) => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/image/generate-image',
                { prompt },
                { headers: { token } }
            );

            console.log("API Response:", data); // Debugging

            if (data.success) {
                loadCreditsData();
                console.log("Generated Image URL:", data.resultImage);
                return data.resultImage;
            } else {
                toast.error(data.message);
                loadCreditsData();
                if (data.creditBalance == 0) {
                    navigate('/buy');
                }
            }
        } catch (error) {
            toast.error(error.message);
            console.error("Error generating image:", error);
        }
    };


    const loadUsers = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/users', { headers: { token } });
            if (data.success) {
                setUsers(data.users);
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to load users");
        }
    };

    const loadTransactions = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/transactions', { headers: { token } });
            if (data.success) {
                setTransactions(data.transactions);
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to load transactions");
        }
    };

    const deleteUser = async (userId) => {
        try {
            // Call the backend API to delete the user
            const { data } = await axios.delete(backendUrl + '/api/user/delete/' + userId, { headers: { token } });

            if (data.success) {
                // After successful deletion, remove the user from the state
                setUsers((prevUsers) => prevUsers.filter(user => user._id !== userId));
                toast.success("User deleted successfully!");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete user");
        }
    };

    const logout = () => {
        localStorage.removeItem('token')
        setToken('')
        setUser(null)
        toast.warning('Logged Out')
        navigate('/')
    }

    // const handleUpdateProfile = async () => {
    //     try {
    //         const updatedData = { name, email , gender }; // Using the current name and email from the state

    //         // Send a request to update the user's profile in the backend
    //         const { data } = await axios.put(
    //             backendUrl + '/api/user/update-profile', // Assuming this endpoint handles profile updates
    //             updatedData,
    //             { headers: { token } }
    //         );

    //         if (data.success) {
    //             toast.success("Profile updated successfully!");
    //             setUser(data.user); // Update the user state with the new data
    //         } else {
    //             toast.error(data.message); // Display error message if update fails
    //         }
    //     } catch (error) {
    //         console.error("Error updating profile:", error);
    //         toast.error("Failed to update profile.");
    //     }
    // };

    const handleUpdateProfile = async () => {
        try {
            const updatedData = { name, email, gender }; // Include gender in the updated data
    
            // Send a request to update the user's profile in the backend
            const { data } = await axios.put(
                backendUrl + '/api/user/update-profile',
                updatedData,
                { headers: { token } }
            );
    
            if (data.success) {
                toast.success("Profile updated successfully!");
                setUser(data.user); // Ensure user state is updated with the latest data
            } else {
                toast.error(data.message); // Display error message if update fails
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error("Failed to update profile.");
        }
    };
    

    useEffect(() => {
        if (token) {
            loadCreditsData();
            loadUsers();
            loadTransactions();

        }

    }, [token])

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setGender(user.gender);

        }
    }, [user]);


    const value = {
        user, setUser, showLogin, setShowLogin, backendUrl, token, setToken, credit,
        setCredit, loadCreditsData, logout, generateImage, users, loadUsers, transactions,
        loadTransactions, deleteUser, handleUpdateProfile, name, setName, email, setEmail,
        gender,


    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;