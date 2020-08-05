import React from 'react';

export const LocationContext = React.createContext({
  userCountries: [],
  selectedCountryId: null,
  selectedRegionId: null,
  setCountryAndRegion: () => {}
});