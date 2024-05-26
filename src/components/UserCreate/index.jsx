import UserForm from "./UserForm";

const UserCreate = () => {
  return (
    <div className="bg-white ">
      <div className="container mx-auto mt-20">
        <div className="w-full">
          <p className="text-xl font-semibold text-center text-neutral-600">
            User Information
          </p>
          <div className="mt-10">
            <UserForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCreate;
