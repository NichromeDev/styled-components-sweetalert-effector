import React from "react";
import Swal from "sweetalert2";

import { H1, Button } from "../../variables/styled";

const title: string =
  "Git user api with sweet-alert, axios and styled-components";

export default (): JSX.Element => {
  Swal.fire({
    title: "Answer following question!",
    text: "Do you copy?",
    icon: "question",
    showCancelButton: true,
    //confirmButtonColor: '#3085d6',
    //cancelButtonColor: '#',
    cancelButtonText: "I'm deaf cause you have my ears!",
    confirmButtonText: "Oh yees baby!",
  }).then((result: any) => {
    if (result.value) Swal.fire("Gotcha!", "So let us begin!", "success");
    else
      Swal.fire(
        "Gotcha!",
        "Muahahah you are pity runt! I've already ate'em!",
        "error"
      );
  });

  const clickHandler: () => void = () =>
    Swal.fire({
      title: "Submit your Github username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  // Swal.fire({
  //   title: "Submit your Github username",
  //   input: "text",
  //   inputAttributes: {
  //     autocapitalize: "off",
  //   },
  //   showCancelButton: true,
  //   confirmButtonText: "Look up",
  //   showLoaderOnConfirm: true,
  //   preConfirm: (name) => {
  //     if (!name)
  //       // throw Swal.showValidationMessage(
  //       //   `You input empty value! you are stupid, get lost!`
  //       // );
  //       throw null;

  //     return fetch(`//itunes.apple.com/search?term=${name}&entity=movie`)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(response.statusText);
  //         }
  //         return response.json();
  //       })

  //       .catch((error) => {
  //         throw Swal.showValidationMessage(`Request failed: ${error}`);
  //       });
  //   },
  //   allowOutsideClick: () => !Swal.isLoading(),
  // }).then((result) => {
  //   if (!result.value)
  //     Swal.showValidationMessage(`There is no such movie, you are loser! `);
  //   else
  //     Swal.fire({
  //       title: `${result.value.trackName}'s avatar`,
  //       imageUrl: result.value.artworkUrl100,
  //     });
  // });

  // .then((result: any) => {
  //   if (!result)
  //     return Swal.showValidationMessage(
  //       `There is no such movie, you are loser! `
  //     );
  //   else
  //     return Swal.fire({
  //       title: `${result.trackName}'s avatar`,
  //       imageUrl: result.artworkUrl100,
  //     });
  // });

  return (
    <>
      <H1>{title}</H1>
      <Button onClick={clickHandler}>Trigger movie api alert search</Button>
    </>
  );
};
