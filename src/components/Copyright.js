const Copyright = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_copyright">
        <div className="container">
          <div className="inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <p>
                Developed  by{" "}
                <a
                  href="https://themeforest.net/user/codeefly"
                  rel="noreferrer"
                  target="_blank"
                >
                  Dev.Dulaj
                </a>{" "}
                © {new Date().getFullYear()}
              </p>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <ul>
                <li>
                  <a href="#">Terms &amp; Condition</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Copyright;
