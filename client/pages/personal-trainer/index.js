import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import ModalComponent from "../../components/Modal";
import Image from "next/image";
import SportHeader from "../../components/SportHeader";

const Program = ({ title, description, imageSrc, id }) => {
  const router = useRouter();

  const handleProgramClick = () => {
    router.push(`/programs/${id}`);
  };

  return (
    <div
      onClick={handleProgramClick}
      className="relative overflow-hidden group cursor-pointer transform transition-transform duration-300 hover:scale-105"
    >
      <img src={imageSrc} alt={title} className="w-full h-112 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-[#CEE422] text-6xl font-bold mb-4">{title}</h3>
        <p className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const IndexPage = () => {
  const { user } = useUser();
  const router = useRouter();

  const programs = [
    {
      id: "running",
      title: "БЕГ",
      description:
        "Кардио-тренировка для сжигания калорий и укрепления сердечно-сосудистой системы.",
      imageSrc: "/images/RunningPhoto.png",
    },
    {
      id: "strength",
      title: "СИЛОВЫЕ",
      description:
        "Упражнения с весами направленные на развитие мышечной силы и выносливости.",
      imageSrc: "/images/PlyoPhoto.png",
    },
    {
      id: "stretching",
      title: "СТРЕТЧИНГ",
      description:
        "Растягивающие упражнения для повышения гибкости и улучшения подвижности суставов.",
      imageSrc: "/images/StretchingPhoto.png",
    },
  ];

  return (
    <div className="bg-black pt-12 pb-12 min-h-screen flex flex-col">
      <SportHeader />
      <div className="flex flex-col lg:flex-row items-center justify-between flex-grow">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full min-h-screen bg-black">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <Image
              src="/images/landing3.png"
              alt="landing"
              width={800}
              height={900}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 px-8 lg:px-16 py-12 order-1 lg:order-2">
            <h2 className="text-7xl lg:text-7xl text-[#FFFF33] mb-20 font-rubick2 font-inter font-extrabold">
              ТВОЙ ЛИЧНЫЙ ФИТНЕС - ТРЕНЕР
            </h2>
            <h4 className="text-xl lg:text-2xl font-bold text-[#FFFFFF] mb-8">
              Подберем для Вас индивидуальную программу в зависимости от целей и
              нынешнего уровня.
            </h4>
            <div className="w-full">
              <a
                href="#programs"
                className="w-30% bg-[#DAF23D] text-custom-green rounded-lg text-xl font-bold py-4 px-8 transition duration-300 ease-in-out hover:bg-[#92a339] hover:shadow-lg"
              >
                Показать программы
              </a>
            </div>
          </div>
        </div>
      </div>
      <section id="programs" className="py-20">
        <div className="flex items-center mb-16">
          <div className="flex space-x-1 mr-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-8 h-0.5 bg-[#CEE422]"></div>
            ))}
          </div>
          <h2 className="text-white text-5xl font-bold">ПРОГРАММЫ</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {programs.map((program, index) => (
            <Program key={index} {...program} />
          ))}
        </div>

        <div className="w-full h-0.5 bg-gradient-to-r from-[#CEE422] to-transparent mt-16"></div>
      </section>
    </div>
  );
};

export default IndexPage;
