import * as yup from 'yup';

const schema = yup.object().shape({
  'Business Description': yup.string().required('Business Description is required'),
  'Corporate Philosophy': yup.string(),
  'company name': yup.string().required('Company Name is required'),
  Industry: yup.string(),
  'Mail ID': yup.string().email('Invalid email format').required('Mail ID is required'),
  'Phone Number': yup.string().required('Phone Number is required'),
  Location: yup.string().required('Location is required'),
  Website: yup.string().url('Invalid URL format'),
  'Working Hours': yup.string().required('Working Hours are required'),
  'Establishment Date': yup.date().required('Establishment Date is required'),
  'Initial Capital': yup.number().required('Initial Capital is required'),
  Representative: yup.string().required('Representative is required'),
  Branch: yup.string().required('Branch is required'),
  'Number Of Employees': yup.number().required('Number Of Employees is required'),
  'Sales Revenue': yup.number().required('Sales Revenue is required'),
  'Operation Profit': yup.number().required('Operation Profit is required'),
  'Average Age Of Employees': yup.number().required('Average Age Of Employees is required'),
  Stock: yup.number().required('Stock is required'),
  LinkedIn_Link: yup.string().required('LinkedIn Link is required').url('Invalid LinkedIn URL format'),
  Twitter_Link: yup.string().required('Twitter Link is required').url('Invalid Twitter URL format'),
  Facebook_Link: yup.string().required('Facebook Link is required').url('Invalid Facebook URL format'),
  Instagram_Link: yup.string().required('Instagram Link is required').url('Invalid Instagram URL format'),
  Youtube_Link: yup.string().required('Youtube Link is required').url('Invalid YouTube URL format'),
});

export default schema;
