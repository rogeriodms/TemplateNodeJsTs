import app from './app';
import { SERVER } from './config';
import 'newrelic';
import { connectToDatabase } from './Database/Connections';

const port = SERVER.PORT;

(async () => await connectToDatabase())();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
