const AuthTemplate = ({ bgImage, children }) => {
  return (
    <main
      className="
        min-h-screen w-full
        flex items-center justify-center
        bg-cover bg-center bg-no-repeat"
      style={{
        //backgroundImage: `url(src/assets/images/background/${bgImage})`,
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <section className="
        max-w-9/10 w-[429px] bg-[rgba(16,23,30,0.85)] shadow-xl rounded-lg
        flex flex-col gap-5
        px-10 py-10"
      >
        {children}
      </section>
    </main>
  );
};

export default AuthTemplate;