import MeetupList from '../components/meetups/MeetupList';

function HomePage() {
  const DUMMY_MEETUPS = [
    {
      id: 'm1',
      title: 'A First Meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Rynek_w_Kaliszu%2C_noc%C4%85.jpg/345px-Rynek_w_Kaliszu%2C_noc%C4%85.jpg',
      address: 'Some address 5, 12345 Some City',
      description: 'This is a frist meetup!',
    },
    {
      id: 'm2',
      title: 'A Second Meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Rynek_w_Kaliszu%2C_noc%C4%85.jpg/345px-Rynek_w_Kaliszu%2C_noc%C4%85.jpg',
      address: 'Some address 10, 12345 Some City',
      description: 'This is a second meetup!',
    },
  ];
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
