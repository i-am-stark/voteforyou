# VoteForYou - A Blockchain Based E-Voting Application

This application was created using React-Bootstrap and NodeJs. 


## Quick Start

To run this project locally:

1. Prerequisites: Make sure you've installed [Node.js] ≥ 12
2. After installing NodeJS, open the project directory in VS Code or any editor of your choice. Install yarn using command `npm install --global yarn`.
3. Install dependencies using - `yarn install`
4. Run the local development server using `yarn start` 
5. You may get an ExecutionPolicy error on windows if you're using NodeJS for the first time. To resolve it open powershell with administrator privileges and run script: `Set-ExecutionPolicy RemoteSigned`.

See `package.json` for a full list of `scripts` you can run with `yarn`.

Now you'll have a local development environment backed by the NEAR TestNet!

Go ahead and play with the app and the code. As you make code changes, the app will automatically reload.

## Exploring The Code

1. The "backend" code lives in the `/contract` folder. See the README there for more info.
2. The frontend code lives in the `/src` folder. `/src/index.html` is a great place to start exploring. Note that it loads in `/src/index.js`, where you can learn how the frontend connects to the NEAR blockchain.
3. Tests: there are different kinds of tests for the frontend and the smart contract. See `contract/README` for info about how it's tested. The frontend code gets tested with [jest]. You can run both of these at once with `yarn run test`.

## Reference:
The project is an upgradation of this [project_video] from NEAR channel on Youtube.
This Project was developed by [Aman_Maurya] as a final year student at IERT Prayagraj in 2022.


  [React]: https://reactjs.org/
  [Node.js]: https://nodejs.org/en/download/package-manager/
  [jest]: https://jestjs.io/
  [project_video]: https://youtu.be/sm8w9tDnMZc
  [Aman_Maurya]: https://www.linkedin.com/in/iamstark/