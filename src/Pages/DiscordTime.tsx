import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

dayjs.extend(relativeTime);

type dropdownValueType = 't' | 'T' | 'd' | 'D' | 'f' | 'F' | 'R';
type dropdownDisplayType = 'h:mm A' | 'h:mm:ss A' | 'M/D/YY' | 'MMMM D, YYYY' | 'MMMM D, YYYY, h:mm A' | 'dddd MMMM D, YYYY, h:mm A' | null;
type displayOutputType = {
  dropdownValue: dropdownValueType
  dropdownDisplay: dropdownDisplayType
}

const getdropdownDisplay = (dropdownValue:dropdownValueType) : dropdownDisplayType => {
  switch(dropdownValue){
    case 't': return 'h:mm A'
    case 'T': return 'h:mm:ss A'
    case 'd': return 'M/D/YY'
    case 'D': return 'MMMM D, YYYY'
    case 'f': return 'MMMM D, YYYY, h:mm A'
    case 'F': return 'dddd MMMM D, YYYY, h:mm A'
    case 'R': return null
  }
}

const DiscordTime = () => {
  const [calendarValue, setCalendarValue] = useState<Dayjs | null>(dayjs())
  const [dropdown, setdropdown] = useState<displayOutputType>({dropdownValue:'t', dropdownDisplay:'h:mm A'})
  const returnDiscordTime = () => calendarValue ? `<t:${calendarValue.unix()}:${dropdown.dropdownValue}>` : ''
  const displayOutputTime = () => calendarValue ? dropdown.dropdownDisplay ? calendarValue.format(dropdown.dropdownDisplay) : calendarValue.fromNow() : ''

  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>

        {/* Description of program */}
        <h1>Discord Timestamp Generator</h1>
        <h3>Generate a Discord Timestamp for cross-timezone scheduling.</h3>
        
        {/* Date-time picker widget*/}
        <DateTimePicker
          label="Discord Timestamp"
          value={calendarValue}
          onChange={(newValue) => setCalendarValue(newValue)}
        />

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={dropdown.dropdownValue}
        label="Age"
        onChange={(event) => setdropdown({dropdownValue: event.target.value as dropdownValueType, dropdownDisplay: getdropdownDisplay(event.target.value as dropdownValueType)})}
      >
        <MenuItem value={'t'}>Short Time</MenuItem>
        <MenuItem value={'T'}>Long Time</MenuItem>
        <MenuItem value={'d'}>Short Date</MenuItem>
        <MenuItem value={'D'}>Long Date</MenuItem>
        <MenuItem value={'f'}>Long Date w/ Short Time</MenuItem>
        <MenuItem value={'F'}>Long Date w/ Day and Short Time</MenuItem>
        <MenuItem value={'R'}>Relative</MenuItem>
      </Select>

      <>{returnDiscordTime()}</>

      {/* Reset to current time button */}
      <Button
        variant="outlined"
        onClick={() => setCalendarValue(dayjs())}
      >
        Reset to current time
      </Button>

      {/* Displaying the output */}
      <h3>Output: &emsp; &emsp; {displayOutputTime()}</h3>

      {/* Copy to clipboard button*/}
      <Button
        variant="outlined"
        onClick={() => {
          const time = returnDiscordTime()
          navigator.clipboard.writeText(time)
          alert("Copied the text: " + time);
        }
      }
      >
        Copy to clipboard
      </Button>

      </LocalizationProvider>
  )
}

export default DiscordTime