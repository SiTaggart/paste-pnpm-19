import { Theme } from '@twilio-paste/core/theme';
import { Box } from '@twilio-paste/core/box';
import { DisplayHeading } from '@twilio-paste/core/display-heading';

function App() {
  return (
    <Theme.Provider theme="twilio">
      <Box padding="space70">
        <DisplayHeading as="h1" variant="displayHeading10">
          Hello World!
        </DisplayHeading>
      </Box>
    </Theme.Provider>
  );
}

export default App;
