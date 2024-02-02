import TypeWriterEffect from "react-typewriter-effect";
const Writer = () => {
  return (
    <TypeWriterEffect
    textStyle={{
      fontFamily: 'inherit',
      color: '#fff',
      fontWeight: 500,
      fontSize: '4em',
    }}
    startDelay={2000}
    cursorColor="#fff"
    multiText={[
      'Hey there, You are Welcome aboard',
      'we have various surprises Just For You...',
      'There are Movies, Music, Boooks',
      'Hotels, Restaurants, and Places.',
      'We recomend it just the way you like it.',
    ]}
    multiTextDelay={2000}
    typeSpeed={50}
  />
  );
};

export default Writer;
