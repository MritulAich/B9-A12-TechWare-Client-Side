import { Helmet } from "react-helmet";
import { IoTriangle } from "react-icons/io5";
import { MdOutlineReport } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useState } from "react";

const ProductDetails = () => {

    const product = useLoaderData();
    const [rating, setRating] = useState(0);

    return (
        <div className="bg-base-200">
            <div className="flex flex-col lg:flex-row justify-center gap-10 p-6">
                <div className="mt-20">
                    <img className="rounded-xl w-60" src={product.image_url} />
                </div>
                <div className="lg:mt-20">
                    <h2 className="text-2xl font-semibold text-center mb-3">{product.name}</h2>
                    <p>Tags: <span className="font-semibold italic">{product.tags[0]}, {product.tags[1]}, {product.tags[2]}</span></p>
                    <p className="text-lg my-1">{product.description}</p>
                    <p>Up vote count: <span className="text-lg font-semibold text-red-500">{product.upvote_count}</span></p>
                    <p className="hover:underline my-1"><a href={product.external_link}>Click to discover more.. </a></p>
                    <div className="flex flex-row justify-evenly">
                        <button className="btn btn-outline my-1"><IoTriangle />UpVote</button>
                        <button className="btn btn-outline btn-error">Report<MdOutlineReport /></button>
                    </div>
                </div>
            </div>

            <h3 className="text-2xl text-center border-b-2 border-b-gray-300 mx-auto md:w-4/12 my-4">What people say about it-</h3>
            <div className="flex flex-col lg:flex-row md:flow-row ">
                <div className="card bg-amber-100 shadow-lg container flex flex-col w-full max-w-lg p-4 mb-10 mx-auto divide-y divide-gray-600 rounded-md dark:text-gray-800">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <img src="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            <h4 className="font-medium text-xl">{product.reviews[0].user}</h4>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                            </svg>
                            <span className="text-xl font-bold">{product.reviews[0].rating}</span>
                        </div>
                    </div>
                    <p>{product.reviews[0].comment}</p>
                </div>

                <div className="card bg-amber-100 shadow-lg container flex flex-col w-full max-w-lg p-4 mb-10 mx-auto divide-y divide-gray-600 rounded-md dark:text-gray-800">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <img src="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            <h4 className="font-medium text-xl">{product.reviews[1].user}</h4>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                            </svg>
                            <span className="text-xl font-bold">{product.reviews[1].rating}</span>
                        </div>
                    </div>
                    <p>{product.reviews[1].comment}</p>
                </div>
            </div>


            <div className="hero bg-base-200 pb-10">
                <div>
                    <h1 className="text-2xl underline font-semibold mb-2">Post a review :-</h1>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name :</span>
                                </label>
                                <input type="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image :</span>
                                </label>
                                <input type="file" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description :</span>
                                </label>
                                <input type="text" name="description" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"><Rating
                                        style={{ maxWidth: 180 }}
                                        value={rating}
                                        onChange={setRating}
                                        isRequired
                                    /></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Helmet>
                <title>Products Details</title>
            </Helmet>
        </div>
    );
};

export default ProductDetails;


// [
//     {
//         "_id": "1",
//         "name": "Fibery",
//         "image_url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1723776444/xgmb3FIIR4jT2u2QJFjUaLs96bx3yqzOlmwtb_496CwXqL60kkwLoCdiCZO7ACChFFENBdeMAKo_s900-c-k-c0x00ffffff-no-rj_v1bfvj.jpg",
//         "description": "An awesome web app that helps you manage your tasks efficiently.",
//         "tags": ["Web App", "Productivity", "Task Management"],
//         "external_link": "https://fibery.io/",
//         "upvote_count": 25,
//         "timestamp": "2024-08-15T12:34:56Z",
//         "reviews": [
//             {
//                 "user": "John Doe",
//                 "rating": 5,
//                 "comment": "This app is fantastic! It has improved my productivity significantly."
//             },
//             {
//                 "user": "Jane Smith",
//                 "rating": 4,
//                 "comment": "Great app, but it could use more features."
//             }
//         ]
//     },
//     {
//         "_id": "2",
//         "name": "Mistral AI",
//         "image_url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1723776370/apps.51814.3d11bbb9-06df-47f7-9a46-2f89e03d2877.5396462e-b651-4f3c-ae30-474cd2402a8f_zrxekg.png",
//         "description": "Generate stunning images using AI technology.",
//         "tags": ["AI Tool", "Image Generation", "Creative"],
//         "external_link": "https://mistral.ai/",
//         "upvote_count": 40,
//         "timestamp": "2024-08-14T10:20:30Z",
//         "reviews": [
//             {
//                 "user": "Alice Johnson",
//                 "rating": 5,
//                 "comment": "Amazing tool! The images generated are of high quality."
//             },
//             {
//                 "user": "Bob Brown",
//                 "rating": 3,
//                 "comment": "It's good, but sometimes the images don't match the input."
//             }
//         ]
//     },
//     {
//         "_id": "3",
//         "name": "PUBG",
//         "image_url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1723776546/radio-times-best-mobile-games-pubg-mobile-6eef406_uu7cxb.jpg",
//         "description": "A thrilling mobile game that keeps you on the edge of your seat.",
//         "tags": ["Mobile App", "Game", "Adventure"],
//         "external_link": "https://www.pubgmobile.com/",
//         "upvote_count": 15,
//         "timestamp": "2024-08-13T09:45:00Z",
//         "reviews": [
//             {
//                 "user": "Chris Evans",
//                 "rating": 4,
//                 "comment": "Fun and addictive game, but could use more levels."
//             },
//             {
//                 "user": "Diana Prince",
//                 "rating": 5,
//                 "comment": "I love this game! It's my go-to for entertainment."
//             }
//         ]
//     },
//     {
//         "_id": "4",
//         "name": "SDK",
//         "image_url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1723776749/SDK-Platform-Tools_dqq7hi.webp",
//         "description": "A comprehensive SDK for building cross-platform apps.",
//         "tags": ["Software", "SDK", "Development"],
//         "external_link": "https://developer.android.com/tools/releases/platform-tools",
//         "upvote_count": 10,
//         "timestamp": "2024-08-12T14:15:22Z",
//         "reviews": [
//             {
//                 "user": "Tony Stark",
//                 "rating": 5,
//                 "comment": "Excellent SDK, very well-documented and easy to use."
//             },
//             {
//                 "user": "Bruce Wayne",
//                 "rating": 4,
//                 "comment": "Good toolkit, but it could have better support for newer frameworks."
//             }
//         ]
//     },
//     {
//         "_id": "5",
//         "name": "Strava",
//         "image_url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1723776981/images_kmihpy.png",
//         "description": "Monitor your health metrics, set goals, and stay fit.",
//         "tags": ["Mobile App", "Health", "Fitness"],
//         "external_link": "https://www.strava.com/",
//         "upvote_count": 35,
//         "timestamp": "2024-08-11T08:30:00Z",
//         "reviews": [
//             {
//                 "user": "Steve Rogers",
//                 "rating": 5,
//                 "comment": "This app has really helped me stay on top of my fitness goals!"
//             },
//             {
//                 "user": "Natasha Romanoff",
//                 "rating": 4,
//                 "comment": "Great app, but sometimes the sync with my wearable is slow."
//             }
//         ]
//     },
//     {
//         "_id": "6",
//         "name": "Sanp2Text",
//         "image_url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1723777054/1200x630wa_in1eka.png",
//         "description": "An AI-powered tool that helps you write and debug code faster.",
//         "tags": ["AI Tool", "Coding", "Development"],
//         "external_link": "https://chromewebstore.google.com/detail/snap2text/ghhoblbbhlomlhdidopjmkbgndhpcflo?hl=en",
//         "upvote_count": 50,
//         "timestamp": "2024-08-10T07:25:45Z",
//         "reviews": [
//             {
//                 "user": "Peter Parker",
//                 "rating": 5,
//                 "comment": "This tool is a game-changer for my coding workflow!"
//             },
//             {
//                 "user": "Wanda Maximoff",
//                 "rating": 4,
//                 "comment": "Very helpful, but it sometimes misses context in complex code."
//             }
//         ]
//     },
//     {
//         "_id": "7",
//         "name": "VR Games Hub",
//         "image_url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1723777225/4sgEsOZemFMIYye_-z2ZZxEw3IFXLfigvSnhXXWZC9wBmUSuAmAvtYlMsOeTt3180EXG_v3sr5p.png",
//         "description": "Explore and play the latest VR games in one place.",
//         "tags": ["Game", "VR", "Entertainment"],
//         "external_link": "https://vrgaminghub.ca/",
//         "upvote_count": 20,
//         "timestamp": "2024-08-09T12:00:00Z",
//         "reviews": [
//             {
//                 "user": "Barry Allen",
//                 "rating": 4,
//                 "comment": "Great selection of games, but some of the older titles have issues."
//             },
//             {
//                 "user": "Oliver Queen",
//                 "rating": 5,
//                 "comment": "I love the immersive experience of these VR games!"
//             }
//         ]
//     },
//     {
//         "_id": "8",
//         "name": "BlackBaze",
//         "image_url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1723777495/backblaze-logo_yx1w6l.png",
//         "description": "Secure and fast cloud storage solution with unlimited space.",
//         "tags": ["Software", "Cloud", "Storage"],
//         "external_link": "https://www.backblaze.com/",
//         "upvote_count": 45,
//         "timestamp": "2024-08-08T11:11:11Z",
//         "reviews": [
//             {
//                 "user": "Clark Kent",
//                 "rating": 5,
//                 "comment": "Reliable and fast. Perfect for storing large files."
//             },
//             {
//                 "user": "Bruce Banner",
//                 "rating": 4,
//                 "comment": "Good service, but it could use better integration with third-party apps."
//             }
//         ]
//     },
//     {
//         "_id": "9",
//         "name": "AI Writing Assistant",
//         "image_url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1723777635/lFo97OOu_400x400_tv3vyh.jpg",
//         "description": "Enhance your writing with AI-powered suggestions and corrections.",
//         "tags": ["AI Tool", "Writing", "Productivity"],
//         "external_link": "https://typora.io/",
//         "upvote_count": 30,
//         "timestamp": "2024-08-07T14:50:30Z",
//         "reviews": [
//             {
//                 "user": "Diana Prince",
//                 "rating": 5,
//                 "comment": "This tool has made my writing process so much smoother!"
//             },
//             {
//                 "user": "Arthur Curry",
//                 "rating": 4,
//                 "comment": "Very helpful, but sometimes the suggestions are repetitive."
//             }
//         ]
//     },
//     {
//         "_id": "10",
//         "name": "Coinbase",
//         "image_url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1723777698/Learn_Illustration_What_is_a_Crypto_Wallet_tsvun4.png",
//         "description": "Manage your cryptocurrency portfolio with ease.",
//         "tags": ["Mobile App", "Finance", "Cryptocurrency"],
//         "external_link": "https://www.coinbase.com/wallet",
//         "upvote_count": 55,
//         "timestamp": "2024-08-06T10:10:10Z",
//         "reviews": [
//             {
//                 "user": "Hal Jordan",
//                 "rating": 5,
//                 "comment": "Best wallet app I've used. Very secure and user-friendly."
//             },
//             {
//                 "user": "Barry Allen",
//                 "rating": 4,
//                 "comment": "Good app, but it could use more detailed analytics features."
//             }
//         ]
//     },
//     {
//         "_id": "11",
//         "name": "LiveOne",
//         "image_url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1723777987/latest_pdr2sd.png",
//         "description": "Stream your favorite songs anytime, anywhere.",
//         "tags": ["Web App", "Music", "Streaming"],
//         "external_link": "https://www.liveone.com/",
//         "upvote_count": 60,
//         "timestamp": "2024-08-05T09:00:00Z",
//         "reviews": [
//             {
//                 "user": "Peter Quill",
//                 "rating": 5,
//                 "comment": "Fantastic selection of music, and the app runs smoothly!"
//             },
//             {
//                 "user": "Phil Rodes",
//                 "rating": 5,
//                 "comment": "Feels like evolving in a good taste of music, recommended for music lovers."
//             }
//         ]
//     },
//     {
//         "_id": "12",
//         "name": "RayCast",
//         "image_url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1723778077/Raycast_App_Icon_w5psuy.png",
//         "description": "A powerful tool to manage projects, tasks, and teams in one place.",
//         "tags": ["Web App", "Project Management", "Collaboration"],
//         "external_link": "https://www.raycast.com/",
//         "upvote_count": 45,
//         "timestamp": "2024-08-04T13:45:00Z",
//         "reviews": [
//             {
//                 "user": "Sam Wilson",
//                 "rating": 5,
//                 "comment": "Makes team collaboration so much easier!"
//             },
//             {
//                 "user": "Bucky Barnes",
//                 "rating": 4,
//                 "comment": "Great tool, but the mobile version could use some improvements."
//             }
//         ]
//     },
//     {
//         "_id": "13",
//         "name": "Invideo AI",
//         "image_url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1723778214/invideo-logo_ioeaiq.webp",
//         "description": "Edit videos effortlessly with AI-powered features and templates.",
//         "tags": ["AI Tool", "Video Editing", "Creative"],
//         "external_link": "https://invideo.io/",
//         "upvote_count": 50,
//         "timestamp": "2024-08-03T11:25:30Z",
//         "reviews": [
//             {
//                 "user": "Shuri",
//                 "rating": 5,
//                 "comment": "Editing videos has never been this easy and fun!"
//             },
//             {
//                 "user": "T'Challa",
//                 "rating": 4,
//                 "comment": "Amazing features, but it could have more export options."
//             }
//         ]
//     },
//     {
//         "_id": "14",
//         "name": "Puzzle Adventure",
//         "image_url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1723778298/com.pixelfederation.solve.mystery.puzzle.adventure-c51c2757-21be-46ad-9dfe-c06fbcf33db0.jpeg_rxdvbj.png",
//         "description": "A challenging puzzle game that tests your problem-solving skills.",
//         "tags": ["Game", "Puzzle", "Adventure"],
//         "external_link": "https://play.google.com/store/apps/details?id=com.pixelfederation.solve.mystery.puzzle.adventure&hl=en",
//         "upvote_count": 35,
//         "timestamp": "2024-08-02T15:40:00Z",
//         "reviews": [
//             {
//                 "user": "Groot",
//                 "rating": 5,
//                 "comment": "I am Groot!"
//             },
//             {
//                 "user": "Rocket Raccoon",
//                 "rating": 4,
//                 "comment": "Fun game, but some levels are too hard!"
//             }
//         ]
//     },
//     {
//         "_id": "15",
//         "name": "Duolingo",
//         "image_url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1723778345/Duo_2019_lbsiju.webp",
//         "description": "Learn new languages quickly with interactive lessons and games.",
//         "tags": ["Mobile App", "Education", "Language Learning"],
//         "external_link": "https://www.duolingo.com/",
//         "upvote_count": 40,
//         "timestamp": "2024-08-01T08:20:15Z",
//         "reviews": [
//             {
//                 "user": "Peter Parker",
//                 "rating": 5,
//                 "comment": "This app has helped me pick up Spanish in no time!"
//             },
//             {
//                 "user": "Miles Morales",
//                 "rating": 4,
//                 "comment": "Great app, but it could use more advanced lessons."
//             }
//         ]
//     },
//     {
//         "_id": "16",
//         "name": "tableau",
//         "image_url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1723778450/images_qnewrs.png",
//         "description": "Analyze and visualize data with powerful tools and dashboards.",
//         "tags": ["Web App", "Data Analytics", "Business"],
//         "external_link": "https://www.tableau.com/",
//         "upvote_count": 60,
//         "timestamp": "2024-07-31T16:10:05Z",
//         "reviews": [
//             {
//                 "user": "Natasha Romanoff",
//                 "rating": 5,
//                 "comment": "Perfect for making sense of complex data!"
//             },
//             {
//                 "user": "Clint Barton",
//                 "rating": 4,
//                 "comment": "Great tool, but the learning curve is a bit steep."
//             }
//         ]
//     },
//     {
//         "_id": "17",
//         "name": "Gimp",
//         "image_url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1723778550/1200px-The_GIMP_icon_-_gnome.svg_y6mupg.png",
//         "description": "Professional photo editing tools with a user-friendly interface.",
//         "tags": ["Software", "Photo Editing", "Creative"],
//         "external_link": "https://www.gimp.org/",
//         "upvote_count": 55,
//         "timestamp": "2024-07-30T14:05:00Z",
//         "reviews": [
//             {
//                 "user": "Wanda Maximoff",
//                 "rating": 5,
//                 "comment": "Excellent for editing photos quickly and professionally!"
//             },
//             {
//                 "user": "Vision",
//                 "rating": 4,
//                 "comment": "Great features, but the subscription is a bit pricey."
//             }
//         ]
//     },
//     {
//         "_id": "18",
//         "name": "Lifesum",
//         "image_url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1723778653/02sjmIOdM1eWJYw3Ma0oGJJ-4.fit_scale.size_760x427.v1577151201_omiccp.jpg",
//         "description": "Track your workouts, diet, and progress with ease.",
//         "tags": ["Mobile App", "Health", "Fitness"],
//         "external_link": "https://lifesum.com/",
//         "upvote_count": 70,
//         "timestamp": "2024-07-29T09:50:00Z",
//         "reviews": [
//             {
//                 "user": "Steve Rogers",
//                 "rating": 5,
//                 "comment": "This app has become an essential part of my fitness routine!"
//             },
//             {
//                 "user": "Bucky Barnes",
//                 "rating": 4,
//                 "comment": "Good app, but the food tracking could be more comprehensive."
//             }
//         ]
//     },
//     {
//         "_id": "19",
//         "name": "Breethe",
//         "image_url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1723778737/5BQQjksz02NbnecGQ3aP6Kg1wMfr4ADAwAuyXDvCTJ84ZluAKc9BcszLxOxRmZ7HhAE_m8v0fk.jpg",
//         "description": "Practice mindfulness and meditation with guided sessions.",
//         "tags": ["Mobile App", "Health", "Meditation"],
//         "external_link": "https://breethe.com/",
//         "upvote_count": 30,
//         "timestamp": "2024-07-28T08:30:00Z",
//         "reviews": [
//             {
//                 "user": "Bruce Banner",
//                 "rating": 5,
//                 "comment": "Helps me stay calm and focused throughout the day."
//             },
//             {
//                 "user": "Tony Stark",
//                 "rating": 4,
//                 "comment": "Great app, but some sessions could be longer."
//             }
//         ]
//     },
//     {
//         "_id": "20",
//         "name": "Aiva AI",
//         "image_url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1723778824/0_qHq87gPD26TevXgY_fddvxq.jpg",
//         "description": "Create, edit, and produce music with professional-grade tools.",
//         "tags": ["Software", "Music", "Production"],
//         "external_link": "https://www.aiva.ai/",
//         "upvote_count": 65,
//         "timestamp": "2024-07-27T12:15:00Z",
//         "reviews": [
//             {
//                 "user": "Stephen Strange",
//                 "rating": 5,
//                 "comment": "Fantastic tool for composing and arranging music!"
//             },
//             {
//                 "user": "Wong",
//                 "rating": 4,
//                 "comment": "Powerful features, but the interface could be more intuitive."
//             }
//         ]
//     }
// ]