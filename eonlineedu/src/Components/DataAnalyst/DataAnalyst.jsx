import React from 'react'
import 'tailwindcss/tailwind.css'; // Make sure you import Tailwind CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

function DataAnalyst() {
  return (
   <>
    <div>
        <h2 className="text-2xl font-semibold mb-2 ">Data Analyst</h2>
        <p>Collect, organize, and transform data to make informed decisions</p>
        <div className='pt-5'>
            <h1 className='text-xl font-semibold'>Median Salary</h1>
            <div className='pt-5'>
                 <a className='bg-gray-200 rounded-sm    md:px-[20%] px-[10%] py-1'>
                    <span className='md:-ml-[19%] -ml-[9%] '>All occupations</span>
                     </a>
                     <span className='p-2'>$37,960*</span>
        </div>
        <div className='pt-5 pb-10'>
                 <a className='bg-blue-600 rounded-sm  text-white md:px-[60%]  px-[30%] py-1'>
                    <span className='md:-ml-[59%] -ml-[29%]'>Data Analyst</span>
                     </a>
                     <span className='p-2'>$90,500**</span>
        </div>
            <hr />
           </div>
          
           <p className='pt-5'>Job openings: 82,489**</p>
           <p>Projected 10 year growth: +13%***</p>


           <h1 className='pt-10 text-xl  font-semibold'>Recommended Professional Certificate</h1>    
      <div className=" min-h-screen  flex items-start justify-start space-x-10">
        
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
          {/* Image */}
          <img className="h-48 w-full object-cover object-end" src="https://i0.wp.com/www.yellowfinbi.com/assets/files/2019/05/planning-4077086_1280.jpg?fit=1200%2C628&ssl=1" alt="Home in Countryside" />
          <div className="p-6">
            <div className="flex items-baseline gap-2">
              {/* Tag */}
              <img src="https://www.svgrepo.com/show/355037/google.svg" class="w-6 h-6" alt="" />
               <span class="dark:text-gray-300 ">
                    Google
               </span>
            </div>
            <h4 className="mt-2 font-semibold text-lg leading-tight truncate">Google Data Analytics</h4>
            <div className="mt-1">
              <span>Skills you will gain: Spreadsheet, Data Analysis, SQL, Data Visualization, Data cleaning...etc</span>
             
            </div>
            <div className="mt-2 flex items-center">
              {/* Star Rating */}
              <span>4.8</span>
              <span className="text-teal-600 font-semibold">
               
                <i className="fas fa-star"></i>
               
              </span>
              <span className="ml-2 text-gray-600 text-sm">34 reviews</span>
            </div>
          </div>
        </div>


        <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
          {/* Image */}
          <img className="h-48 w-full object-cover object-end" src="https://www.springboard.com/library/static/c8a8b68015e12fea64edae0ab4e9dd71/1f368/shutterstock_1814645042.jpg" alt="Home in Countryside" />
          <div className="p-6">
            <div className="flex items-baseline gap-2">
              {/* Tag */}
              <img src="https://www.svgrepo.com/show/330669/ibm.svg" class="w-6 h-6" alt="" />
               <span class="dark:text-gray-300 ">
                    IBM
               </span>
            </div>
            <h4 className="mt-2 font-semibold text-lg leading-tight truncate">IBM Data Analytics</h4>
            <div className="mt-1">
              <span>Skills you will gain: Spreadsheet, Data Analysis, SQL, Data Visualization, Data cleaning...etc</span>
             
            </div>
            <div className="mt-2 flex items-center">
              {/* Star Rating */}
              <span>4.8</span>
              <span className="text-teal-600 font-semibold">
               
                <i className="fas fa-star"></i>
               
              </span>
              <span className="ml-2 text-gray-600 text-sm">34 reviews</span>
            </div>
          </div>
          
        </div>
        
      </div>
      
      <div class=" text-base font-semibold leading-7  ml-[40%] -mt-24">
                <p>
                    <a href="#" class="text-sky-500 transition-all duration-300 group-hover:text-white ">Explore all Certificates
                        &rarr;
                    </a>
                </p>
            </div>
            <div class="p-4 ">
  <figure class="md:flex max-w-5xl  rounded-xl p-8 md:p-0 ">
    <img class="w-24 h-24 md:w-48 md:h-48 md:rounded-none rounded-full mx-auto object-cover" src="https://images.unsplash.com/photo-1495716868937-273203d5bb0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxsYWR5fGVufDB8MHx8fDE2OTQxNzI4MTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="" width="384" height="512" />
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p class="text-lg font-medium dark:text-slate-100">
        "For anyone starting out as a data analyst, this is a great introduction and is very inspiring. 
        The content was well paced and was accessible to people just starting out.
         I liked the variety of the assignments present in the program. "
        </p>
      </blockquote>
      <figcaption class="font-medium">
        <div class="text-sky-500 dark:text-sky-400">
          Sarah Dayan
        </div>
        
      </figcaption>
    </div>
  </figure>
  <hr  />
  <div className='pt-10 text-sm'>
  <p>* Employment, Wages, and Projected Change in Employment by Typical Entry-level 
    Education : U.S. Bureau of Labor Statistics. 
    Sept. 2022, www.bls.gov/emp/tables/education-summary.htm. </p>
    <p>** Median salary and job opening data are sourced from United States Lightcast™ Job Postings Report.
         Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)</p>
         <p>*** Growth rate data is sourced from United States Lightcast™ Job Postings Report. 
            Data for job roles relevant to featured programs (7/1/2022 - 6/30/2023)</p>
  </div>
  
</div>

    </div>
   
   </>
  )
}

export default DataAnalyst