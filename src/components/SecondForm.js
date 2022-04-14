import React, { Fragment, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

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

const secondForm = ({ setSaveFormData }) => {
  const strongRegex = new RegExp('^(?=.*[a-z]{2})(?=.*[A-Z]{2})(?=.*[0-9]{2})(?=.*[!@#$%^&*]{2})');

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('last Name is required'),
    Address: Yup.string().required('Address is required'),
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
    setSaveFormData(data);
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
                id="firstName"
                name="firstName"
                label="text"
                fullWidth
                margin="dense"
                {...register('firstName')}
                error={!!errors.firstName}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.firstName?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="lastName"
                type="text"
                fullWidth
                margin="dense"
                {...register('lastName')}
                error={!!errors.lastName}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.lastName?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="Address"
                name="Address"
                label="Address"
                type="text"
                fullWidth
                margin="dense"
                {...register('Address')}
                error={!!errors.Address}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.Address?.message}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>
              Register
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default secondForm;
