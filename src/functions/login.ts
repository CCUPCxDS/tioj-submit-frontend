import axios from 'axios';
import * as cheerio from 'cheerio';



export async function login(username: string, password: string) {
  const judgeSite = import.meta.env.VITE_WEBSITE; // Replace with your actual judge site URL
  console.log('Judge site:', judgeSite);
  const TIOJusername = username;
  const TIOJpassword = password; // Note: This does not hide the input. Consider using another method for secure input.
  console.log('Logging in...');

  try {
    const { data: signInPage } = await axios.get(`${judgeSite}/users/sign_in`);
    const $ = cheerio.load(signInPage);
    const form = $('form');
    const authenticityToken = form.find('input[name="authenticity_token"]').val();

    const loginResponse = await axios.post(`${judgeSite}/users/sign_in`, {
      authenticity_token: authenticityToken,
      'user[username]': TIOJusername,
      'user[password]': TIOJpassword,
      'user[remember_me]': '1',
      'commit': 'Sign in'
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    console.log('Login successful!');
  } catch (error) {
    console.error('Login failed:', error);
  } finally {

  }
}
