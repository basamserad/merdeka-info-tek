function Contact() {
  return (
    <div
      id="contact-us"
      className="flex flex-col bg-black gap-8 text-white text-center items-center px-6 py-28 tablet:px-32"
    >
      <h2 className="capitalize text-3xl font-semibold">
        reach out to us
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed explicabo
        nisi iste mollitia repudiandae laborum ipsa nemo earum cumque ducimus
        molestias quos quia fuga maiores dignissimos dolores, modi atque
        suscipit?
      </p>

      <form className="flex flex-col w-full text-start">
        <div className="flex flex-col laptop:flex-row laptop:gap-10 w-full">
          <div className="flex flex-col w-full">
            <label className="mb-1" htmlFor="fname">Enter your first name</label>
            <input
              type="text"
              name="fname"
              className="bg-white text-black text-lg font-medium rounded-md pl-4 py-1 mb-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-1" htmlFor="lname">Enter your last name</label>
            <input
              type="text"
              name="lname"
              className="bg-white text-black text-lg font-medium rounded-md pl-4 py-1 mb-2"
            />
          </div>
        </div>
        <div className="flex flex-col laptop:flex-row laptop:gap-10">
          <div className="flex flex-col w-full">
            <label className="mb-1" htmlFor="email">Enter your email</label>
            <input
              type="text"
              name="email"
              className="bg-white text-black text-lg font-medium rounded-md pl-4 py-1 mb-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-1" htmlFor="phone">Enter your mobile number</label>
            <input
              type="tel"
              name="phone"
              className="bg-white text-black text-lg font-medium rounded-md pl-4 py-1 mb-2"
            />
          </div>
        </div>
        <label className="mb-1 mt-5" htmlFor="message">Enter your message</label>
        <textarea
          name="message"
          className="rounded-md text-black p-2 text-sm mb-2"
          maxLength={250}
          rows={6}
        />
        <button className="bg-white mt-4 text-black text-lg font-medium rounded-md px-7 py-1 place-self-center tablet:w-64 laptop:px-10 laptop:py-2 hover:text-white hover:bg-orange-400">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
