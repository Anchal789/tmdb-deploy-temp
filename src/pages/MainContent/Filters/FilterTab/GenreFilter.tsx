import type { Dispatch, FunctionComponent } from "react";
import AccordionDetails from "../../../../components/AccordionDetails";
import FilterSectionTitle from "../../../../components/FilterSectionTitle";
import { Box, Chip } from "@mui/material";
import type { DiscoverFiltersType, GenreType } from "../../../../types/filters";
import type { Action } from "../../../../types/common";
import { useData } from "../../../../lib/useData";

const GenreFilter: FunctionComponent<{
	dispatch: Dispatch<Action>;
	filters: DiscoverFiltersType;
	pageURl: string;
}> = ({ dispatch, filters, pageURl }) => {
	const { data: genres } = useData<{ genres: Array<GenreType> }>({
		queryKey: ["genres", pageURl],
		url: `/genre/${pageURl.includes("movie") ? "movie" : "tv"}/list`,
		params: { language: "en-US" },
	});
	return (
		<AccordionDetails
			sx={{
				borderBottom: "1px solid #e5e7eb",
				borderRadius: "8px 8px 0 0",
			}}
		>
			<FilterSectionTitle title='Genres' />
			<Box mt={"-8px"}>
				{genres?.genres?.map((genre: GenreType) => {
					const genreIdStr = genre.id.toString();
					const currentGenresStr = filters?.with_genres || "";
					const currentGenresArray = currentGenresStr
						? currentGenresStr.split(",")
						: [];

					const isSelected = currentGenresArray.includes(genreIdStr);

					return (
						<Chip
							key={genre.id}
							label={genre.name}
							variant={isSelected ? "filled" : "outlined"}
							sx={{
								cursor: "pointer",
								backgroundColor: isSelected ? "#01b4e4" : "",
								border: "1px solid",
								borderColor: isSelected ? "#01b4e4" : "#9e9e9e",
								color: isSelected ? "white" : "#000",
								marginRight: "8px",
								marginTop: "8px",
								fontSize: "0.9rem",
								fontWeight: 400,
								height: "100%",
								padding: "4px 12px",
								borderRadius: "14px",
								display: "inline-flex",
								"&:hover ": {
									backgroundColor: "#01b4e4 !important",
									textDecoration: "underline",
									color: "#fff",
									borderColor: "#01b4e4",
									textUnderlineOffset: "3px",
								},
								"& .MuiChip-label": {
									padding: "0",
								},
							}}
							onClick={() => {
								let newGenresArray: string[];

								if (isSelected) {
									newGenresArray = currentGenresArray.filter(
										(id) => id !== genreIdStr,
									);
								} else {
									newGenresArray = [...currentGenresArray, genreIdStr];
								}

								dispatch({
									type: "SET_FILTERS",
									payload: {
										...filters,
										with_genres:
											newGenresArray.length > 0
												? newGenresArray.join(",")
												: null,
									},
								});
							}}
						/>
					);
				})}
			</Box>
		</AccordionDetails>
	);
};
export default GenreFilter;
