import React, { Fragment, useMemo, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { CountryDropdown } from 'react-country-region-selector';

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
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    countryCode: Yup.string()
      .min(2, 'minimum 2 character')
      .max(50, 'maximum 50 character')
      .required('Please enter the required field')
      .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
    phoneNumber: Yup.string(),
    acceptTermsAndCondition: Yup.string()
      .min(10, 'min 10 character required')
      .required('Address is required'),
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
    localStorage.setItem('data', JSON.stringify(data));
    navigate('/thirdForm');
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
                label="First name"
                fullWidth
                margin="dense"
                {...register('firstName')}
                error={!!errors.firstName}
              />
              <CountryDropdown
                name="country"
                required
                id="country"
                name="country"
                label="First name"
                fullWidth
                margin="dense"
                {...register('country')}
                error={!!errors.country}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.countryCode?.message}
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
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Controller
                    control={control}
                    name="acceptTerms"
                    defaultValue="false"
                    inputRef={register()}
                    render={({ field: { onChange } }) => (
                      <Checkbox color="primary" onChange={e => onChange(e.target.checked)} />
                    )}
                  />
                }
                label={
                  <Typography color={errors.acceptTerms ? 'error' : 'inherit'}>
                    I have read and agree to the Terms *
                  </Typography>
                }
              />
              <br />
              <Typography variant="inherit" color="textSecondary">
                {errors.acceptTerms ? `(${errors.acceptTerms.message})` : ''}
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
