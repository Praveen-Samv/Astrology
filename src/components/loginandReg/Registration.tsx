

import React from 'react';

const Registration: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
            alt="CorpAstro Logo"
            className="w-52 h-auto object-cover"
          />
        </div>

        {/* Registration Form */}
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              placeholder="Create a password"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-300"
          >
            Register
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/" className="text-orange-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;




// import React, { useState } from 'react';
// import { supabase } from '../../config/supabaseClient';
// import { useNavigate } from 'react-router-dom';

// const Registration: React.FC = () => {
//   const [fullname, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       // Register the user with Supabase
//       const { data, error: signUpError } = await supabase.auth.signUp({
//         email,
//         password,
//       });

//       if (signUpError) throw signUpError;

//       // Insert user data into the `users` table (optional)
//       const { error: insertError } = await supabase
//         .from('users')
//         .insert([{ fullname, email }]);

//       if (insertError) throw insertError;

//       alert('Registration successful! Please check your email to confirm.');
//       navigate('/login'); // Redirect to login page
//     } catch (error) {
//       console.error('Registration error:', error);
//       setError('Registration failed. Please try again.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         {/* Logo */}
//         <div className="flex justify-center mb-8">
//           <img
//             src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
//             alt="CorpAstro Logo"
//             className="w-52 h-auto object-cover"
//           />
//         </div>

//         {/* Registration Form */}
//         <form onSubmit={handleRegister}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
//               placeholder="Enter your full name"
//               value={fullname}
//               onChange={(e) => setFullName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
//               placeholder="Create a password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {/* Error Message */}
//           {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//           {/* Register Button */}
//           <button
//             type="submit"
//             className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-300"
//           >
//             Register
//           </button>
//         </form>

//         {/* Back to Login */}
//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             Already have an account?{' '}
//             <a href="/login" className="text-orange-600 hover:underline">
//               Login
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;




