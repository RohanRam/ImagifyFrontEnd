import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import sample_img_3 from './sample_img_3.png'

import sample_img_4 from './sample_img_4.jpg'
import sample_img_5 from './sample_img_5.jpg'
import sample_img_6 from './sample_img_6.jpg'
import sample_img_7 from './sample_img_7.jpg'
import sample_img_8 from './sample_img_8.jpg'

// import profile_img_1 from './profile_img_1.jpg'
// import profile_img_2 from './profile_img_2.jpg'
// import profile_img_3 from './profile_img_3.jpg'

import profile_img_1 from './profile_img_1-min.jpg'
import profile_img_2 from './profile_img_2-min.jpg'
import profile_img_3 from './profile_img_3-min.jpg'

import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import cash from './cash.png'
import mylogo from './mylogo.png'
import po1 from './po1.jpg'
import male from './bx-male.svg'
import female from './bx-female.svg'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    sample_img_3,
    sample_img_4,
    sample_img_5,
    sample_img_6,
    sample_img_7,
    sample_img_8,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    cash,
    mylogo,
    po1,
    male,
    female,
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Rachel Zane',
        role:'Graphic Designer',
        stars:5,
        text:`I've been using AI image generation for almost two years, and it still amazes me. Turning simple words into stunning visuals has completely transformed my creative projects.`},
    {
        image:profile_img_3,
        name:'Mike Ross',
        role:'Content Creator',
        stars:4,
        text:`AI-generated images have made designing effortless. Whether for marketing, social media, or personal projects, I can instantly create high-quality visuals just by describing them.`},    
    {
        image:profile_img_2,
        name:'Jesica Litt',
        role:' Graphic Designer',
        stars:5,
        text:`As someone with no design skills, AI image generation has been a game-changer. I just type my idea, and within seconds, I get professional-quality images that fit my vision.`},
]

export const plans = [
    {
      id: 'Basic',
      price: 29,
      credits: 30,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 59,
      credits: 70,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 99,
      credits: 200,
      desc: 'Best for enterprise use.'
    },
  ]