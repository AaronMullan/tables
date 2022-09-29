/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui';

type ProgressBarTypes = {
  progressBarNumerator?: number;
  progressBarDenominator?: number;
  progressBarColor?: string;
  progressBarAsStars?: boolean;
};

const ProgressBar: React.FC<ProgressBarTypes> = ({
  progressBarColor = 'Gray',
  progressBarNumerator = 0,
  progressBarDenominator = 0,
  progressBarAsStars,
}) => {
  // convert ratio to percentage for regular progress bar
  const progressPercentage =
    (progressBarNumerator / progressBarDenominator) * 100;
  // convert ratio to percinquage for progress bar as stars, round to one decimal
  const progressPercinquage =
    Math.round((progressBarNumerator / progressBarDenominator) * 5 * 10) / 10;
  const label = progressBarAsStars
    ? `${progressPercinquage} / 5`
    : `${progressBarNumerator} / ${progressBarDenominator}`;

  const progressBackGroundLookup = {
    Gray: 'rgba(241, 241, 241, 1)',
    Teal: 'rgba(0, 186, 233, 0.2)',
  };
  const progressColorLookup = {
    Gray: 'rgba(160, 160, 168, 1)',
    Teal: 'rgba(0, 186, 233, 1)',
  };

  const Star = () => (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2285 5.6414C14.1769 5.48251 14.0396 5.36671 13.8743 5.34272L9.56894 4.7171L7.64353 0.815779C7.5696 0.665987 7.41705 0.571167 7.25 0.571167C7.08295 0.571167 6.9304 0.665987 6.85647 0.815779L4.93106 4.7171L0.625734 5.34272C0.460436 5.36671 0.323136 5.48251 0.271499 5.6414C0.219862 5.80026 0.262927 5.97466 0.382556 6.09124L3.49788 9.12796L2.76244 13.4159C2.73421 13.5805 2.8019 13.7469 2.93704 13.8451C3.07214 13.9433 3.25128 13.9563 3.3992 13.8785L7.25 11.854L11.1008 13.8785C11.165 13.9123 11.2351 13.9289 11.305 13.9289C11.396 13.9289 11.4865 13.9007 11.563 13.8451C11.6981 13.7469 11.7658 13.5805 11.7376 13.4159L11.0021 9.12796L14.1174 6.09124C14.2371 5.97466 14.2801 5.80026 14.2285 5.6414Z"
        fill={progressColorLookup[progressBarColor]}
      />
    </svg>
  );

  return (
    <Flex sx={{ alignContent: 'center', flexDirection: 'column' }}>
      <Box>
        {progressBarAsStars ? (
          <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
            {/* make a whole number of stars */}
            {Array.from(
              { length: Math.floor(progressPercinquage) },
              (_, index) => (
                <Star key={index} />
              )
            )}
          </Flex>
        ) : (
          <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Box
              sx={{
                height: '12px',
                width: '100px',
                position: 'relative',
                background: progressBackGroundLookup[progressBarColor],
                borderRadius: '1000px',
              }}
            >
              <Box
                sx={{
                  background: progressColorLookup[progressBarColor],
                  width: `${progressPercentage}%`,
                  height: '100%',
                  display: 'block',
                  borderRadius: '1000px',
                }}
              />
            </Box>
          </Flex>
        )}
      </Box>
      <label
        style={{
          fontSize: '14px',
          lineHeight: 1,
          marginTop: '4px',
          color: 'hsla(240, 6%, 42%, 1)',
          textAlign: 'center',
        }}
      >
        {label}
      </label>
    </Flex>
  );
};

export default ProgressBar;
