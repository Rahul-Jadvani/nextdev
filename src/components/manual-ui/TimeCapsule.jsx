import dynamic from "next/dynamic";
const InfiniteMenu = dynamic(
  () => import('../../blocks/Components/InfiniteMenu/InfiniteMenu'),
  { ssr: true }
);

const items = [
  {
    image: '/image/img1.jpg',
    link: 'https://photos.google.com/share/AF1QipNEGYc5FDJn0ZCoWH-qxTzVWG4JPwnGQTZttEenHl7IvpK1BZk_MMN0dBy_xudtJg?key=T29DMzcxamNYeW5JV3ExVmJyTk9GcXdnNkVXNWNR',
    title: 'DSU DEVHACK 2024 TIME CAMPSULE',
    description: 'A look into Last year\'s hackaton'
  },
  {
    image: '/image/img2.jpg',
    link: 'https://photos.google.com/share/AF1QipNEGYc5FDJn0ZCoWH-qxTzVWG4JPwnGQTZttEenHl7IvpK1BZk_MMN0dBy_xudtJg?key=T29DMzcxamNYeW5JV3ExVmJyTk9GcXdnNkVXNWNR',
    title: 'First DSU DevHack',
    description: 'The inaugural hackathon that started it all.'
  },
  {
    image: '/image/img3.jpg',
    link: 'https://photos.google.com/share/AF1QipNEGYc5FDJn0ZCoWH-qxTzVWG4JPwnGQTZttEenHl7IvpK1BZk_MMN0dBy_xudtJg?key=T29DMzcxamNYeW5JV3ExVmJyTk9GcXdnNkVXNWNR',
    title: 'Strong Reach',
    description: 'Attracted 2000+ Registrations and 300+ Onground Hackers'
  },
  {
    image: '/image/img4.jpg',
    link: 'https://photos.google.com/share/AF1QipNEGYc5FDJn0ZCoWH-qxTzVWG4JPwnGQTZttEenHl7IvpK1BZk_MMN0dBy_xudtJg?key=T29DMzcxamNYeW5JV3ExVmJyTk9GcXdnNkVXNWNR',
    title: 'Hybrid Format',
    description: '36 Hours of energetic coding'
    },
    {
    image: '/image/img5.jpg',
    link: 'https://photos.google.com/share/AF1QipNEGYc5FDJn0ZCoWH-qxTzVWG4JPwnGQTZttEenHl7IvpK1BZk_MMN0dBy_xudtJg?key=T29DMzcxamNYeW5JV3ExVmJyTk9GcXdnNkVXNWNR',
    title: 'Multiple Domains',
    description: '6 different domains including IOT & Web3 for all varieties of hackers'
    },
    {
    image: '/image/img6.jpg',
    link: 'https://photos.google.com/share/AF1QipNEGYc5FDJn0ZCoWH-qxTzVWG4JPwnGQTZttEenHl7IvpK1BZk_MMN0dBy_xudtJg?key=T29DMzcxamNYeW5JV3ExVmJyTk9GcXdnNkVXNWNR',
    title: 'Industrial Experts as Jury',
    description: 'Exceptional Judgement Rounds by experts from Top Industries'
    },
];

const TimeCapsule = () => (
  <div className='h-[100vh] w-[100vw]'>
    <InfiniteMenu items={items}/>
  </div>
);

export default TimeCapsule;