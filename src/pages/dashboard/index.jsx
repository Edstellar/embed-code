import { useState } from "react";
import { TextInput, Button, Group, Box, Text, Code } from "@mantine/core";
import { useForm } from "@mantine/form";

function Dashboard() {
  const [link, setLink] = useState(null);
  const form = useForm({
    initialValues: {
      link: "",
      blog: "",
      alt: "",
    },

    validate: {
      link: (value) => (value ? null : "Link is required"),
      blog: (value) => (value ? null : "blog link is required"),
      alt: (value) => (value ? null : "alt is required"),
    },
  });

  const submitHandler = (values) => {
    setLink(values);
  };

  const codeBlock = (link) => {
    const blog =
      link?.blog.startsWith("https://") || link?.blog.startsWith("http://")
        ? link?.blog
        : `https://${link?.blog}`;
    return `
    <div class="copy-div">Embed this infographic on your site:
<button class="copy-btn" title="Copy to clipboard" data-copy-text='<p style="max-width: 600px; overflow: auto;"><a style="max-width: 600px" href="${blog}" _rte_href="${blog}" target="_blank"> <img style="max-width: 600px" src="${link?.link}" _rte_src="${link?.link}" alt="${link?.alt}" width="600px" border="0" /> </a> </p> <p>Via <a href="https://www.edstellar.com" _rte_href="https://www.edstellar.com" target="_blank">Edstellar</a> </p>'>Copy to clipboard</button></div>
    `;
  };

  const codeBlock2 = (link) => {
    const blog =
      link?.blog.startsWith("https://") || link?.blog.startsWith("http://")
        ? link?.blog
        : `https://${link?.blog}`;
    return `
    <p style="max-width: 600px; overflow: auto;"><a style="max-width: 600px" href="${blog}" _rte_href="${blog}" target="_blank"> <img style="max-width: 600px" src="${link?.link}" _rte_src="${link?.link}" alt="${link?.alt}" width="600px" border="0" /> </a> </p> <p>Via <a href="https://www.edstellar.com" _rte_href="https://www.edstellar.com" target="_blank">Edstellar</a> </p>
    `;
  };

  return (
    <>
      <Box maw={300} mx="auto">
        <form onSubmit={form.onSubmit((values) => submitHandler(values))}>
          <TextInput
            withAsterisk
            label="Image Link"
            placeholder="enter image link"
            mb={10}
            {...form.getInputProps("link")}
          />
          <TextInput
            withAsterisk
            label="blog Link"
            placeholder="enter blog page link"
            mb={10}
            {...form.getInputProps("blog")}
          />
          <TextInput
            withAsterisk
            label="alt text"
            placeholder="enter alt text"
            mb={10}
            {...form.getInputProps("alt")}
          />

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
      {link && (
        <>
          <Text component="h2">preview</Text>
          <Box dangerouslySetInnerHTML={{ __html: codeBlock2(link) }}></Box>
        </>
      )}
      <Box maw={750} mx={"auto"} mt={30}>
        {link && <Code>{codeBlock(link)}</Code>}
      </Box>
    </>
  );
}

export default Dashboard;
