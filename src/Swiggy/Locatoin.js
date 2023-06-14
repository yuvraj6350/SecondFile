import React ,{useEffect} from "react";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import OrderInput  from "./OrderInput";


export default () => {
  const {
    placesService,
    placePredictions,
    savePlaceDetailsToState,
    renderItem,
    
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = usePlacesService({
    apiKey: process.env.REACT_APP_GOOGLE,
  });

  useEffect(() => {
    // fetch place details for the first element in placePredictions array
    if (placePredictions.length)
      placesService?.getDetails(
        {
          placeId: placePredictions[0].place_id,
        },
        (placeDetails) => savePlaceDetailsToState(placeDetails)
      );
  }, [placePredictions]);

  return (
    <>
      <OrderInput
        placeholder="Debounce 500 ms"
        onChange={(evt) => {
          getPlacePredictions({ input: evt.target.value });
        }}
        loading={isPlacePredictionsLoading}
      />
      {placePredictions.map((item) => renderItem(item))}
    </>
  );
};