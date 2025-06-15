import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // Internal CSS styles
  const styles = {
    wrapper: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f0f2f5',
    },
    formContainer: {
      width: '100%',
      maxWidth: '400px',
      padding: '30px',
      borderRadius: '12px',
      backgroundColor: '#ffffff',
      boxShadow: '0 0 25px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Segoe UI, sans-serif',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
    },
    inputGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
      color: '#222',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      outline: 'none',
    },
    error: {
      color: '#e74c3c',
      fontSize: '13px',
      marginTop: '5px',
    },
    button: {
      width: '100%',
      padding: '12px',
      marginTop: '20px',
      backgroundColor: '#646cff',
      color: '#fff',
      fontSize: '16px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background 0.3s',
    },
  };

  return (
    <div style={styles.wrapper}>
      <form onSubmit={formik.handleSubmit} style={styles.formContainer}>
        <h2 style={styles.heading}>Sign Up</h2>

        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            style={styles.input}
          />
          {formik.touched.name && formik.errors.name && (
            <div style={styles.error}>{formik.errors.name}</div>
          )}
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            style={styles.input}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={styles.error}>{formik.errors.email}</div>
          )}
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            style={styles.input}
          />
          {formik.touched.password && formik.errors.password && (
            <div style={styles.error}>{formik.errors.password}</div>
          )}
        </div>

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
