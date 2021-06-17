export function LoginFromPublisher() {
  window.arenaSSO.authenticate({
    id: "234567",
    email: "kristin.mckinney@example.com.br",
    picture: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Kristin Mckinney"
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
      id: "234567",
      email: "kristin.mckinney@example.com.br",
      picture: "https://randomuser.me/api/portraits/women/12.jpg",
      name: "Kristin Mckinney"
    });
  }
}

const loginHelper = { LoginFromPublisher, LogoutFromPublisher, startArenaSSO }

export default loginHelper;