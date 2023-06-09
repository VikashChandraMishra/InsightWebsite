import { Box, Typography, Button } from "@mui/material";

const Form = () => {

  return (

    <div>

      <Box
        sx={{
          p: { xs: "10px", sm: "20px 150px" },
          marginTop: "100px",
        }}
      >

        <Typography
          sx={{
            fontWeight: "700",
            fontFamily: "Switzer-Variable",
            fontSize: { xs: "30px", md: "60px" },
            textAlign: { xs: "center", sm: "start" },
          }}
        >
          Apply for this Job
        </Typography>

        <Box
          marginTop="50px"
          flexDirection="column"
          gap={5}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
            <label style={{ fontSize: "1.2rem" }}>First Name:</label>
            <input
              type="text"
              style={{ padding: "10px 30px", borderRadius: "50px" }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
            <label style={{ fontSize: "1.2rem" }}>Last Name:</label>
            <input
              type="text"
              style={{ padding: "10px 30px", borderRadius: "50px" }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
            <label style={{ fontSize: "1.2rem" }}>Email:</label>
            <input
              type="text"
              style={{ padding: "10px 30px", borderRadius: "50px" }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
            <label style={{ fontSize: "1.2rem" }}>Phone:</label>
            <input
              type="text"
              style={{ padding: "10px 30px", borderRadius: "50px" }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
            <label style={{ fontSize: "1.2rem" }}>Resume / CV:</label>
            <input type="file" style={{ width: "200px" }} />
          </Box>

          {/* <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
            <label style={{ fontSize: "1.2rem" }}>LinkedIn Profile:</label>
            <input type="file" style={{width:"200px"}} />
          </Box> */}

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
            <label style={{ fontSize: "1.2rem" }}>LinkedIn Profile:</label>
            <input
              type="text"
              style={{ padding: "10px 30px", borderRadius: "50px" }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
            <label style={{ fontSize: "1.2rem" }}>Website/ Portfolio:</label>
            <input type="file" style={{ width: "200px" }} />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
            <label style={{ fontSize: "1.2rem" }}>
              How did you hear about us:
            </label>
            <select
              name="about"
              id="about"
              style={{ padding: "10px 30px", borderRadius: "50px", width: "200px" }}
            >
              <option value="Career Site">Career Site</option>
              <option value="college university">College/University</option>
              <option value="glassdoor">Glassdoor</option>
              <option value="social media">Social Media</option>
              <option value="others">Others</option>
            </select>
          </Box>

          {/* <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
            <label style={{ fontSize: "1.2rem" }}>
              Which team do you want to apply for?
            </label>
            <select
              name="about"
              id="about"
              style={{ padding: "10px 30px", borderRadius: "50px" }}
            >
              <option value="Brand Servicing">Brand Servicing</option>
              <option value="Copy Writing">Copy Writing</option>
              <option value="Art & Design">Art & Design</option>
              <option value="Audio Visual">Audio Visual</option>
              <option value="Social Media">Social Media</option>
            </select>
          </Box> */}

          {/* <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
            <label style={{ fontSize: "1.2rem" }}>
              Please confirm your salary expectations:
            </label>
            <input
              type="text"
              style={{ padding: "10px 30px", borderRadius: "50px" }}
            />
          </Box> */}

          {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <label style={{ fontSize: "1.2rem" }}>How old are you?</label>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">16-24</label>
            <br />
            <input type="radio" id="css" name="fav_language" value="CSS" />
            <label for="css">25-34</label>
            <br />
            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="JavaScript"
            />
            <label for="javascript">35-44</label>
            <br />
            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="JavaScript"
            />
            <label for="javascript">45-50</label>
          </Box> */}
          {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <label style={{ fontSize: "1.2rem" }}>
              What is your gender identity? (Select one)
            </label>

            <Box display="flex" alignItems="center">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html">Female</label>
            </Box>
            <br />
            <input type="radio" id="css" name="fav_language" value="CSS" />
            <label for="css">Male</label>
            <br />
            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="JavaScript"
            />
            <label for="javascript">Non-binary</label>
            <br />
            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="JavaScript"
            />
            <label for="javascript">Prefer to self describe</label>
            <br />
            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="JavaScript"
            />
            <label for="javascript">Prefer not to say</label>
          </Box> */}
          <Button
            variant="contained"
            color="success"
            sx={{ alignSelf: "start", fontWeight: "bold", p: "10px 50px " }}
          >
            Submit
          </Button>
        </Box>

        <Box
          marginTop="50px"
          flexDirection="column"
          gap={5}
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              gap: 2,
            }}
          >
            <label style={{ fontSize: "1.2rem" }}>First Name:</label>
            <input
              type="text"
              style={{ padding: "10px 30px", borderRadius: "50px" }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <label style={{ fontSize: "1.2rem" }}>Last Name:</label>
            <input
              type="text"
              style={{ padding: "10px 30px", borderRadius: "50px" }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <label style={{ fontSize: "1.2rem" }}>Email:</label>
            <input
              type="text"
              style={{ padding: "10px 30px", borderRadius: "50px" }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <label style={{ fontSize: "1.2rem" }}>Phone:</label>
            <input
              type="text"
              style={{ padding: "10px 30px", borderRadius: "50px" }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <label style={{ fontSize: "1.2rem" }}>Resume / CV:</label>
            <input type="file" />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <label style={{ fontSize: "1.2rem" }}>LinkedIn Profile:</label>
            <input type="text" />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <label style={{ fontSize: "1.2rem" }}>Website/ Portfolio:</label>
            <input type="file" />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <label style={{ fontSize: "1.2rem" }}>
              How did you hear about us:
            </label>
            <select
              name="about"
              id="about"
              style={{ padding: "10px 30px", borderRadius: "50px" }}
            >
              <option value="Career Site">Career Site</option>
              <option value="college university">College University</option>
              <option value="glassdoor">Glassdoor</option>
              <option value="social media">Social Media</option>
              <option value="others">Others</option>
            </select>
          </Box>
          {/* <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <label style={{ fontSize: "1.2rem" }}>
              Please confirm your salary expectations:
            </label>
            <input
              type="text"
              style={{ padding: "10px 30px", borderRadius: "50px" }}
            />
          </Box> */}
          {/* <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              gap: 2,
            }}
          >
            <label style={{ fontSize: "1.2rem" }}>How old are you?</label>

            <Box display="flex" alignItems="center" gap={2}>
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html">16-24</label>
            </Box>
            <br />
            <Box display="flex" alignItems="center" gap={2}>
              <input type="radio" id="css" name="fav_language" value="CSS" />
              <label for="css">25-34</label>
            </Box>
            <br />
            <Box display="flex" alignItems="center" gap={2}>
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />
              <label for="javascript">35-44</label>
            </Box>
            <br />
            <Box display="flex" alignItems="center" gap={2}>
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />
              <label for="javascript">45-50</label>
            </Box>
          </Box> */}
          {/* <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              gap: 2,
            }}
          >
            <label style={{ fontSize: "1.2rem" }}>
              What is your gender identity? (Select one)
            </label>

            <Box display="flex" alignItems="center" gap={2}>
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html">Female</label>
            </Box>
            <br />
            <Box display="flex" alignItems="center" gap={2}>
              <input type="radio" id="css" name="fav_language" value="CSS" />
              <label for="css">Male</label>
            </Box>
            <br />
            <Box display="flex" alignItems="center" gap={2}>
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />
              <label for="javascript">Non-binary</label>
            </Box>
            <br />
            <Box display="flex" alignItems="center" gap={2}>
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />
              <label for="javascript">Prefer to self describe</label>
            </Box>
            <br />
            <Box display="flex" alignItems="center" gap={2}>
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />
              <label for="javascript">Prefer not to say</label>
            </Box>
          </Box> */}
          <Button
            variant="contained"
            color="success"
            sx={{ margin: "auto", fontWeight: "bold", p: "10px 50px " }}
          >
            Submit
          </Button>
        </Box>

      </Box>
    </div>
  );
};

export default Form;