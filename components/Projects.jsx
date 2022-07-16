import React from "react";
import Dashboard from "../public/assets/projects/Dashboard1.png";
import LeaveHistory from "../public/assets/projects/LeaveHistory.png";
import ShopingCart from "../public/assets/projects/shoping_cart.png";
import Shine from "../public/assets/projects/shine.png";
import Staff from "../public/assets/projects/staff1.png";
import Food1 from "../public/assets/projects/food1.png";
import Food2 from "../public/assets/projects/food2.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          my Projects
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Employee Management System"
            backgroundImg={LeaveHistory}
            projectUrl="/employee_management"
            tech="Next JS TypeScript"
          />
          <ProjectItem
            title="Church Management System"
            backgroundImg={Dashboard}
            projectUrl="/dgm_youth"
            tech="React JS"
          />
          <ProjectItem
            title="React-Redux Shoping Cart"
            backgroundImg={ShopingCart}
            projectUrl="/react_redux_shoping_cart"
            tech="React JS"
          />
          <ProjectItem
            title="Cleaning Services"
            backgroundImg={Shine}
            projectUrl="/shine_cleaning_services"
            tech="Next JS"
          />
          <ProjectItem
            title="Employee Staff App"
            backgroundImg={Staff}
            projectUrl="/employee_staff_app"
            tech="React Native"
          />
          <ProjectItem
            title="Food Delivery App Front-End"
            backgroundImg={Food1}
            projectUrl="/food_delivery_app_front_end"
            tech="React Native"
          />
          <ProjectItem
            title="Food Delivery App"
            backgroundImg={Food2}
            projectUrl="/food_delivery_app"
            tech="React Native"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
