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
    formContainer: {
      maxWidth: '400px',
      margin: '100px auto',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ffffff',
      fontFamily: 'Segoe UI, sans-serif',
      textAlign: 'left',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    inputGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: '600',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    error: {
      color: 'red',
      fontSize: '14px',
      marginTop: '5px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#646cff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '20px',
    },
  };

  return (
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
  );
};

export default SignUpForm;
