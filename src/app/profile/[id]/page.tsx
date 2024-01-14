export default function UserProfilePage({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="w-82">
        <h1>Profile</h1>
        <hr />
        <p className="text-4xl">
          Profile page
          <span className="p-2 rouded bg-orange-500 ml-2">{params.id}</span>
        </p>
      </div>
    </div>
  );
}
