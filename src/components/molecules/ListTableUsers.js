import React from "react";
import { getUsers, getUserByID, deleteUser } from "../../config/providers";
import IsLoading from "../atoms/isLoading";
import ListTables from "../atoms/ListTables";
import { BsEyeFill, BsFillTrashFill } from "react-icons/bs";
import ModalCenter from "../atoms/ModalCenter";
import "./ListTableUsers.css";
import { Button } from "react-bootstrap";
import ErrorMessages from "./ErrorMessages";

const ListTableUsers = (props) => {
  const [user, setUser] = React.useState([]);
  const [isError, setIsError] = React.useState(false);
  const [errMessage, setErrMessage] = React.useState(null);
  const [details, setDetails] = React.useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [confirmDelete, setConfirmDelete] = React.useState(false);
  const arr = ["No.", "Name", "E-Mail", "Role", "Action"];
  const arrDetailUser = [
    "No.",
    "Name",
    "E-Mail",
    "Password",
    "Role",
    "CreatedAt",
    "UpdatedAt",
  ];

  const detailUser = (id) => {
    setModalShow(true);
    getUserByID(id)
      .then((response) => {
        setDetails([response.data]);
      })
      .catch((err) => console.log(err));
  };

  const handleConfirmDel = (id, email) => {
    if (props.user.email === email) {
      setIsError(true);
      setErrMessage("USER SEDANG ONLINE");
      setConfirmDelete(false);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    } else {
      deleteUser(id)
        .then((response) => {
          setIsError(true);
          setErrMessage(response.message);
          setTimeout(() => {
            setIsError(false);
          }, 3000);
        })
        .catch((err) => console.log(err));
      setConfirmDelete(false);
      getUsers()
        .then((data) => setUser(data.data))
        .catch((err) => console.log(err));
    }
  };
  React.useEffect(() => {
    getUsers()
      .then((data) => setUser(data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <React.Fragment>
      <ErrorMessages isError={isError} errMessage={errMessage} />
      {user.length > 0 ? (
        <ListTables tableHead={arr}>
          {user.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              {props.user.role === "ADMIN" ? (
                <td>
                  <i onClick={() => detailUser(user.id)}>
                    <BsEyeFill />
                  </i>
                  &nbsp; &nbsp; &nbsp;
                  <i onClick={() => setConfirmDelete(true)}>
                    <BsFillTrashFill />
                  </i>
                  <ModalCenter
                    onHide={() => setConfirmDelete(false)}
                    show={confirmDelete}
                    centered>
                    Delete {`ID ${user.id}, ${user.name} as ${user.role} ?`}
                    <br />
                    <Button
                      variant='success'
                      onClick={() => handleConfirmDel(user.id, user.email)}
                      className='mt-3'>
                      Yes
                    </Button>
                    &nbsp;
                    <Button
                      variant='danger'
                      onClick={() => setConfirmDelete(false)}
                      className='mt-3'>
                      No
                    </Button>
                  </ModalCenter>
                </td>
              ) : (
                <td>
                  <i onClick={() => detailUser(user.id)}>
                    <BsEyeFill />
                  </i>
                </td>
              )}
            </tr>
          ))}
        </ListTables>
      ) : (
        <IsLoading />
      )}
      <ModalCenter
        onHide={() => setModalShow(false)}
        show={modalShow}
        fullscreen>
        {details.length > 0 ? (
          <ListTables tableHead={arrDetailUser}>
            {details.map((details, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{details.name}</td>
                <td>{details.email}</td>
                <td>{details.password}</td>
                <td>{details.role}</td>
                <td>{details.createdAt}</td>
                <td>{details.updatedAt}</td>
              </tr>
            ))}
          </ListTables>
        ) : (
          ""
        )}
      </ModalCenter>
      {/* <ModalCenter
        onHide={() => setConfirmDelete(false)}
        show={confirmDelete}
        centered>
        Confirm for delete user?
      </ModalCenter> */}
    </React.Fragment>
  );
};

export default ListTableUsers;
