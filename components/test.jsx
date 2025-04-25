const test = () => {
  return (
    <div className="min-h-screen flex bg-blue-50">
      <div className="background-image: url(../images/5.jpg) bg-cover">
        <div className="w-64 bg-blue-300/60 min-h-screen backdrop-blur-lg">
          <section id="animation flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center items-center md:justify-start py-7 mx-5">
            <div className="size-4 rounded-full bg-green-200 animate-bounce"></div>
            <div className="size-4 rounded-full bg-orange-200"></div>
            <div className="size-4 rounded-full bg-red-200 animate-bounce"></div>
          </section>

          <section
            id="profile"
            className="flex items-center justify-center -space-x-2 mt-7 mx-2 "
          >
            <div className="z-20">
              <img
                src="../images/14.jpg"
                alt=""
                className="rounded-full size-16 border-2 border-white"
              />
            </div>
            <div className="text-sm tracking-wide bg-gradient-to-1 from-transparent to-white pl-4 hidden md:block">
              <h3>name</h3>
              <h3>Admin</h3>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default test;
