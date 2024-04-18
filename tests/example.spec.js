// @ts-check
const { test, expect } = require('@playwright/test');

test('Name not filled', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://solarvest-suites.com/');

  // Click on the "Register Now" link
  await page.locator('#example-collapse-navbar').getByRole('link', { name: 'Register Now' }).click();

  // Click on the "Name*" input field to trigger the error message
  await page.getByPlaceholder('Name*').click();

  // Click on another input field to remove focus from the "Name*" field
  await page.getByPlaceholder('Email*').click();

  await page.getByPlaceholder('Email*').fill('pizsammar@gmail.com');

  // Click on another input field to remove focus from the "Email*" field
  await page.getByPlaceholder('Phone*').click();
  await page.getByPlaceholder('Phone*').fill('01111474745');

  // Click on the checkbox (assuming it's for the comments)
  await page.locator('#comments').check();

  // Click on the "Submit" button
  await page.getByRole('button', { name: 'Submit' }).click();

  // Wait for a brief moment for the error message to appear
  await page.waitForSelector('.invalid-feedback');
  
  // Verify that the error message "Please fill out this field" appears
  const errorMessage = await page.textContent('.invalid-feedback');
  expect(errorMessage).toBe('Please fill out this field');
});

test('Email not filled', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://solarvest-suites.com/');

  // Click on the "Register Now" link
  await page.locator('#example-collapse-navbar').getByRole('link', { name: 'Register Now' }).click();

  // Click on the "Name*" input field to remove focus
  await page.getByPlaceholder('Name*').click();
  await page.getByPlaceholder('Name*').fill('ammar');

  await page.getByPlaceholder('Email*').click();

  // Click on another input field to remove focus from the "Name*" field
  await page.getByPlaceholder('Phone*').click();
  await page.getByPlaceholder('Phone*').fill('01111474745');

  // Click on the checkbox (assuming it's for the comments)
  await page.locator('#comments').check();

  // Click on the "Submit" button
  await page.getByRole('button', { name: 'Submit' }).click();

  // Wait for a brief moment for the error message to appear
  await page.waitForSelector('.invalid-feedback');

  // Verify that the error message "Please fill out this field" appears
  const errorMessage = await page.textContent('.invalid-feedback');
  expect(errorMessage).toBe('Please fill out this field');
});

test('Phone not filled', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://solarvest-suites.com/');

  // Click on the "Register Now" link
  await page.locator('#example-collapse-navbar').getByRole('link', { name: 'Register Now' }).click();

  // Click on the "Name*" input field to remove focus
  await page.getByPlaceholder('Name*').click();
  await page.getByPlaceholder('Name*').fill('ammar');

  // Click on the "Email*" input field to remove focus
  await page.getByPlaceholder('Email*').click();
  await page.getByPlaceholder('Email*').fill('pizsammar@gmail.com');

  // Click on another input field to remove focus from the "Email*" field
  await page.getByPlaceholder('Phone*').click();

  // Click on the checkbox (assuming it's for the comments)
  await page.locator('#comments').check();

  // Click on the "Submit" button
  await page.getByRole('button', { name: 'Submit' }).click();

  // Wait for a brief moment for the error message to appear
  await page.waitForSelector('.invalid-feedback');

  // Verify that the error message "Please fill out this field" appears
  const errorMessage = await page.textContent('.invalid-feedback');
  expect(errorMessage).toBe('Please fill out this field');
});

test('', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://solarvest-suites.com/');

  // Click on the "Register Now" link
  await page.locator('#example-collapse-navbar').getByRole('link', { name: 'Register Now' }).click();

  // Click on the "Name*" input field to remove focus
  await page.getByPlaceholder('Name*').click();
  await page.getByPlaceholder('Name*').fill('ammar');

  // Click on the "Email*" input field to remove focus
  await page.getByPlaceholder('Email*').click();
  await page.getByPlaceholder('Email*').fill('pizsammar@gmail.com');

  // Click on another input field to remove focus from the "Email*" field
  await page.getByPlaceholder('Phone*').click();
  await page.getByPlaceholder('Phone*').fill('01111474745');

  // Click on the checkbox (assuming it's for the comments)
  await page.locator('#comments').check();

  // Click on the "Submit" button
  await page.getByRole('button', { name: 'Submit' }).click();
  
});





