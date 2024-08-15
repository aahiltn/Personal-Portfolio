import { useEffect, useRef } from "react";
import { WidgetInstance } from "friendly-challenge";
import { useStore } from "@nanostores/react";
import { human } from "../store";

const FriendlyCaptcha = () => {
  const container = useRef(null);
  const widget = useRef<WidgetInstance | null>(null);
  const isHuman = useStore(human); // Move useStore out of the render

  const doneCallback = async (solution: string) => {
    console.log(solution);
    const json = {
      solution: solution,
      secret: "A1I1U9MMC1A9ODH2FO63FRCDBCQNGOCLIRJV3R8OFHAD2HHURR83T9HMGA",
    };

    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
      };

      fetch(
        "https://api.friendlycaptcha.com/api/v1/siteverify",
        requestOptions
      ).then((response) => {
        console.log(response.json());
      });

      // if (response.success) {
      //   console.log(solution);
      //   console.log("Captcha was solved. The form can be submitted.");
      //   human.set(true);
      // } else {
      //   console.log("There was an error when trying to solve the Captcha.");
      //   // }
    } catch (error) {
      console.error(error);
    }
  };

  const errorCallback = (err: Error) => {
    console.log("There was an error when trying to solve the Captcha.");
    console.log(err);
  };

  useEffect(() => {
    if (!widget.current && container.current) {
      widget.current = new WidgetInstance(container.current, {
        doneCallback: doneCallback,
        errorCallback: errorCallback,
      });
    }

    return () => {
      if (widget.current) widget.current.reset();
    };
  }, [container]); // Ensure container is added as a dependency

  return (
    <div className="w-full flex flex-col space-y-2 mt-2 justify-center items-center">
      <div
        ref={container}
        className="frc-captcha rounded-lg w-auto h-min"
        data-sitekey="FCMSKCK38045IPJ6"
      />
      <button
        className="w-auto rounded-lg dark:bg-gray-600 dark:text-gray-200 text-yellow-950 font-bold hover:shadow-xl hover:outline-1 dark:hover:bg-gray-700 hover:bg-yellow-600 bg-[#D4A13D] justify-center py-2 align-middle px-4"
        type="submit"
        hidden={!isHuman}
      >
        Send Message
      </button>
    </div>
  );
};

export default FriendlyCaptcha;
