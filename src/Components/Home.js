import { Tab } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";

const Home = (props) => {
  const [promptList, changePromptList] = useState([]);

  useEffect(() => {
    const getPrompts = async () => {
      changePromptList(await window.contract.getAllPrompts());
      console.log(await window.contract.getAllPrompts());
    };
    getPrompts();
  }, []);

  return (
    <Container>
      <br/>
      <div style={{ backgroundColor:'#E0EEEE', padding:"25px"}}>
        <h3>
          Welcome to VoteForYou.
        </h3>
        <p>
          Here you can create new Polls and also participate in polls created by other users.<br/>
          All you need is a NEAR Testnet wallet account. You have to login to your NEAR Testnet
           wallet in order to create new polls and participate in other Polls. 
        </p>
      </div>
    <div>
      <Table style={{ margin: "5vh" }} striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>List of Polls</th>
            <th>Go to Poll</th>
          </tr>
        </thead>
        <tbody>
          {promptList.map((el, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{el}</td>
                <td>
                  {" "}
                  <Button onClick={() => props.changeCandidates(el)}>
                    Go to Poll
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
    </Container>
  );
};

export default Home;
