import Accordion from "./Accordion";

const Process = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_process">
        <div className="container">
          <div className="process_inner">
            <div className="left">
              <div className="devman_tm_main_title" data-text-align="left">
                <span>Working Expirence And Volunteering</span>
                <h3>+4 months of passion  for
                programming techniques</h3>
              </div>
              <div className="exp_img" data-text-align="left">
                <img src="img/logo/BOC.jpg" alt="" />
                <img src="img/logo/Payshia.jpeg" alt="" />
                <img src="img/logo/ICTS.jpeg" alt="" />
              </div>
              <div>
              <img className="exp_img_1" src="img/logo/IEEE.jpeg" alt=""/>
              
              </div>
              
              
             
            </div>
            <div className="right">
              <div className="acc_holder">
                <Accordion />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Process;
