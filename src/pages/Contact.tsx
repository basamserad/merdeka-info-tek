function Contact() {
  return (
    <div id="contact-us" className="flex flex-col bg-black gap-8 text-white text-center items-start px-6 py-28 tablet:px-32">
      <h2 className="capitalize mt-10 text-3xl font-semibold">
        start your project with us
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed explicabo
        nisi iste mollitia repudiandae laborum ipsa nemo earum cumque ducimus
        molestias quos quia fuga maiores dignissimos dolores, modi atque
        suscipit?
      </p>

    


            <div className="flex flex-col gap-2"> {/* Wrap all inputs in a container */}
              <input
                type="text"
                name="textbox-name" // Set the name attribute if needed
                placeholder="Full Name" // Set the placeholder text
                className="bg-white text-black text-lg font-medium rounded-md px-7 py-1 laptop:px-10 laptop:py-2"
              />

              <input
                type="text"
                name="textbox-name" // Set the name attribute if needed
                placeholder="Email Address" // Set the placeholder text
                className="bg-white text-black text-lg font-medium rounded-md px-7 py-1 laptop:px-10 laptop:py-2"
              />

              <input
                type="text"
                name="textbox-name" // Set the name attribute if needed
                placeholder="Mobile Number" // Set the placeholder text
                className="bg-white text-black text-lg font-medium rounded-md px-7 py-1 laptop:px-10 laptop:py-2"
              />

              <input
                type="text"
                name="textbox-name" // Set the name attribute if needed
                placeholder="Your Message" // Set the placeholder text
                className="bg-white text-black text-lg font-medium rounded-md px-7 py-1 laptop:px-10 laptop:py-2"
              />
            </div>


      <a
        href="#"
        className="bg-white mb-10 text-black text-lg font-medium rounded-md px-7 py-1 laptop:px-10 laptop:py-2 hover:text-white hover:bg-black"
      >
        Let's talk
      </a>
    </div>
  );
}

export default Contact;
