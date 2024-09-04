const user = {
  name: 'Vijay Desu',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};


function MyProfile() {
  return (
    <>
    <h1> {user.name}</h1>
    <img src={user.imageUrl} alt={'Your name is '+user.name}
    className="avatar"
    style={{width : user.imageSize,height:user.imageSize}}
    />
 
   
    </>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app -{user.name}</h1>
      <MyProfile />
    </div>
  );
}