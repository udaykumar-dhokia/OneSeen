import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <section>
        <section>
          <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
              <div class="md:col-span-1">
                <div class="max-w-lg md:max-w-none">
                  <h2 class="text-2xl font-semibold text-gray-900 sm:text-3xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h2>

                  <p class="mt-4 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur doloremque saepe architecto maiores repudiandae amet
                    perferendis repellendus, reprehenderit voluptas sequi.
                  </p>
                </div>
              </div>

              <div class="md:col-span-3">
                <img
                  src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
