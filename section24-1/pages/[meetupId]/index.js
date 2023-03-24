import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://doch2130:gF2fa6SoV9bFBb1a@cluster0.un8x83t.mongodb.net/test'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://doch2130:gF2fa6SoV9bFBb1a@cluster0.un8x83t.mongodb.net/test'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selecctedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selecctedMeetup._id.toString(),
        title: selecctedMeetup.title,
        address: selecctedMeetup.address,
        image: selecctedMeetup.image,
        description: selecctedMeetup.description,
      },
    },
  };
}
export default MeetupDetails;
