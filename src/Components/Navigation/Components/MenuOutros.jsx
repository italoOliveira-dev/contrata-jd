import { Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function MenuOutros() {
  return (
    <div>
      <span className="flex uppercase text-left font-medium text-sm text-gray-400 ml-10 mr-10 mb-2">
        Outros
      </span>
      <div className="flex-col text-left">
        <Menu className="ml-0 mr-0 mb-10">
          <Link className="ml-0 mr-0" to="/suporte">
            <MenuItem className="">
              <div className="flex p-5 space-x-5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 3C7.0374 3 3 7.0374 3 12V15.7287C3 16.6503 3.8073 17.4 4.8 17.4H5.7C5.93869 17.4 6.16761 17.3052 6.3364 17.1364C6.50518 16.9676 6.6 16.7387 6.6 16.5V11.8713C6.6 11.6326 6.50518 11.4037 6.3364 11.2349C6.16761 11.0661 5.93869 10.9713 5.7 10.9713H4.8828C5.3832 7.4883 8.3802 4.8 12 4.8C15.6198 4.8 18.6168 7.4883 19.1172 10.9713H18.3C18.0613 10.9713 17.8324 11.0661 17.6636 11.2349C17.4948 11.4037 17.4 11.6326 17.4 11.8713V17.4C17.4 18.3927 16.5927 19.2 15.6 19.2H13.8V18.3H10.2V21H15.6C17.5854 21 19.2 19.3854 19.2 17.4C20.1927 17.4 21 16.6503 21 15.7287V12C21 7.0374 16.9626 3 12 3Z" />
                </svg>

                <span className="">Suporte</span>
              </div>
            </MenuItem>
          </Link>

          <Link className="ml-0 mr-0" to="/settings">
            <MenuItem className="">
              <div className="flex p-5 space-x-5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.3703 20H10.0943C9.88901 20 9.6899 19.9299 9.52997 19.8012C9.37004 19.6726 9.25889 19.4931 9.21497 19.2926L8.84867 17.597C8.36002 17.3829 7.89668 17.1151 7.46717 16.7987L5.81387 17.3252C5.61818 17.3876 5.40702 17.3812 5.21548 17.307C5.02393 17.2329 4.86351 17.0954 4.76087 16.9175L3.11927 14.0816C3.0177 13.9035 2.97957 13.6962 3.01113 13.4937C3.04268 13.2911 3.14205 13.1052 3.29297 12.9665L4.57547 11.7965C4.51715 11.2665 4.51715 10.7317 4.57547 10.2017L3.29297 9.0344C3.14183 8.8956 3.04233 8.70957 3.01077 8.5068C2.97921 8.30404 3.01747 8.09657 3.11927 7.9184L4.75727 5.0807C4.85991 4.90278 5.02033 4.76533 5.21188 4.69117C5.40342 4.61701 5.61458 4.61059 5.81027 4.673L7.46357 5.1995C7.68317 5.0375 7.91177 4.8863 8.14757 4.7495C8.37527 4.6217 8.60927 4.5056 8.84867 4.4021L9.21587 2.7083C9.25958 2.50778 9.37052 2.32822 9.53028 2.19939C9.69004 2.07057 9.88904 2.00022 10.0943 2H13.3703C13.5755 2.00022 13.7745 2.07057 13.9343 2.19939C14.094 2.32822 14.205 2.50778 14.2487 2.7083L14.6195 4.403C14.8715 4.5146 15.1181 4.6397 15.3566 4.7792C15.5789 4.9079 15.794 5.0492 16.001 5.2013L17.6552 4.6748C17.8507 4.61262 18.0617 4.61915 18.253 4.6933C18.4444 4.76746 18.6047 4.90478 18.7073 5.0825L20.3453 7.9202C20.5541 8.2865 20.4821 8.75 20.1716 9.0353L18.8891 10.2053C18.9474 10.7353 18.9474 11.2701 18.8891 11.8001L20.1716 12.9701C20.4821 13.2563 20.5541 13.7189 20.3453 14.0852L18.7073 16.9229C18.6046 17.1008 18.4442 17.2383 18.2527 17.3124C18.0611 17.3866 17.85 17.393 17.6543 17.3306L16.001 16.8041C15.5718 17.1203 15.1087 17.3878 14.6204 17.6015L14.2487 19.2926C14.2048 19.493 14.0938 19.6723 13.934 19.801C13.7743 19.9296 13.5754 19.9998 13.3703 20ZM11.7287 7.4C10.7739 7.4 9.85822 7.77928 9.18308 8.45442C8.50795 9.12955 8.12867 10.0452 8.12867 11C8.12867 11.9548 8.50795 12.8705 9.18308 13.5456C9.85822 14.2207 10.7739 14.6 11.7287 14.6C12.6834 14.6 13.5991 14.2207 14.2743 13.5456C14.9494 12.8705 15.3287 11.9548 15.3287 11C15.3287 10.0452 14.9494 9.12955 14.2743 8.45442C13.5991 7.77928 12.6834 7.4 11.7287 7.4Z" />
                </svg>

                <span className="">Configurações</span>
              </div>
            </MenuItem>
          </Link>
        </Menu>
      </div>
    </div>
  );
}

export default MenuOutros;
