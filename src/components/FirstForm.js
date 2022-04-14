import React, { Fragment, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';

const firstForm = ({ setSaveFormData }) => {
  const strongRegex = new RegExp('^(?=.*[a-z]{2})(?=.*[A-Z]{2})(?=.*[0-9]{2})(?=.*[!@#$%^&*]{2})');
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .matches(
        strongRegex,
        'Password must be at least 2 Capital, 2 lower, 2 Number and 2 special Character',
      ),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    // setSaveFormData(data);
    localStorage.setItem('data', JSON.stringify(data));
    navigate('/secondForm');
  };

  return (
    <>
      <Paper>
        <Box px={3} py={2}>
          <Typography variant="h2" align="center" margin="dense">
            Form
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                margin="dense"
                {...register('email')}
                error={!!errors.email}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.email?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                fullWidth
                margin="dense"
                {...register('password')}
                error={!!errors.password}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.password?.message}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>
              Save And Next
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default firstForm;
