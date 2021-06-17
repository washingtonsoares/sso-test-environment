export function LoginFromPublisher() {
  window.arenaSSO.authenticate({
    id: "2345673432",
    email: "kristin.mckinney@example.br",
    picture: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Kristin Mckinney",
    customProps: [
      {
        label: 'country',
        value: 'United Kindom'
      },
      {
        label: 'city',
        value: 'Manchester'
      }
    ]
  });
};

export function LogoutFromPublisher() {
  window.arenaSSO.signOut();
}

export function startArenaSSO(onSignin, onSignout, isLogin) {
  window.arenaSSO.initialize({ 
    // Called when the user clicks on sign in in an Arena Widget 
    signIn: () => { 
      LoginFromPublisher();
      onSignin();
    },
    // Called when the user clicks on sign out in an Arena Widget
    signOut: () => { 
      LogoutFromPublisher();
      onSignout();
     },
  }); 
  
  if(isLogin) {
    window.arenaSSO.authenticate({
      id: "2345673432",
      email: "kristin.mckinney@example.br",
      picture: "https://randomuser.me/api/portraits/women/12.jpg",
      name: "Kristin Mckinney",
      customProps: [
        {
          label: 'country',
          value: 'United Kindom'
        },
        {
          label: 'city',
          value: 'Manchester'
        }
      ]
    });
  }
}

const loginHelper = { LoginFromPublisher, LogoutFromPublisher, startArenaSSO }

export default loginHelper;