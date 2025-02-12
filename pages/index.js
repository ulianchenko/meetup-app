import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/M%C3%BCnchen_Panorama.JPG',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/M%C3%BCnchen_Panorama.JPG',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!'
  },
];
function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;