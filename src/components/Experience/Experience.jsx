import {  Slide } from "react-awesome-reveal";
import bannerImg from "../../assets/img7.jpg";

const Experience = () => {
    return (
        <div className="relative flex flex-col-reverse">
            <div className="card card-compact w-full h-[60vh] bg-base-100 shadow-xl ">
                <figure><img className="w-full h-[60vh] bg-cover" src={bannerImg} alt="" /></figure>
               
            </div>
            <div className="card-body md:w-1/2 w-full absolute lg:top-0 lg:left-0 bg-gray-900 opacity-90 
            text-slate-300 h-full">
            <Slide cascade damping={0.8}>
                <h2 className="card-title text-4xl font-bold">20 Years Of  <br /> In Art & Drawing School</h2>
                <p className="">
                Jul 12, 2018 — Some of my art experiences is exhibiting my paintings in group shows for artists with disabilities These include various olde city galleries 
                I have always loved art but I have no ability to draw. 
                </p>
            </Slide >
                
                <div className="lg:pt-0 pt-28">
                    <div>
                        <div className="flex justify-between">
                            <h3 className="text-2xl font-bold">Drawing</h3>
                            <h3 className="text-2xl font-bold">90%</h3>
                        </div>
                        <progress className="progress progress-primary w-full" value={90} max="100"></progress>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h3 className="text-2xl font-bold">Painting</h3>
                            <h3 className="text-2xl font-bold">86%</h3>
                        </div>
                        <progress className="progress progress-error w-full" value={86} max="100"></progress>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h3 className="text-2xl font-bold">Sketch</h3>
                            <h3 className="text-2xl font-bold">82%</h3>
                        </div>
                        <progress className="progress progress-success w-full" value={82} max="100"></progress>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h3 className="text-2xl font-bold">Degital Art</h3>
                            <h3 className="text-2xl font-bold">85%</h3>
                        </div>
                        <progress className="progress progress-secondary w-full" value={85} max="100"></progress>
                    </div>
                </div>

            </div> 
            
        </div>
    );
};

export default Experience;

 