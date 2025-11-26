import React, { useState } from 'react';
import styles from './login.module.css' 
export const Login = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleLogin = () => setShowLogin(!showLogin);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', email, password);
    setShowLogin(false);
  };

  return (
    <div>
      <button onClick={toggleLogin} className={styles.btn}>Login</button>

      {showLogin && (
        <div className={styles.loginoverlay}>
          <div className={styles.loginmodal}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                className={styles.logininput}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className={styles.logininput}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className={styles.loginbutton}>Submit</button>
              <button onClick={toggleLogin} className={styles.loginbutton}>Cancel</button>
              <p>Don't have an Account? <a href=""  >Register </a></p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

// import React from 'react';
// import styles from './login.module.css';
// export const Login = () => {
//   const handleClick = () => {
//     alert('Button was clicked!');
//   };

//   return (
//     <button onClick={handleClick}>
//       Click Me
//     </button>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     console.log('Email:', email);
//     console.log('Password:', password);
//     // Add authentication logic here
//   };

//   return (
//     <div>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;

// import styles from './login.module.css';
// export const Login = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.login}>
//         <h1>Login</h1>
//         <form>
//           <input type="text" placeholder='Email' />
//           <input type="password" placeholder='Password' />
//           <button type='submit'>Login</button>
//         </form>
//         <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//       </div>
      
//     </div>
//   )
// }