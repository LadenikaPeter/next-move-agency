import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type notification_message = {
  message: string;
};

// const options = {
//   position: "top-right",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   theme: "colored",
//   transition: "Bounce",
// };

export const info = ({ message }: notification_message) => {
  toast.info(message);
};
export const success = ({ message }: notification_message) => {
  toast.success(message);
};
export const warning = ({ message }: notification_message) => {
  toast.warning(message);
};
export const error = ({ message }: notification_message) => {
  toast.error(message);
};
