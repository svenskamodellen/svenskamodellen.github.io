import { readFile } from "node:fs/promises";
import path from "node:path";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@svenskamodellen/components/Breadcrumb";
import { Container } from "@svenskamodellen/components/Container";
import { Footer } from "@svenskamodellen/components/Footer";
import { Main } from "@svenskamodellen/components/Main";
import { MarkdownProseBlock } from "@svenskamodellen/components/MarkdownProseBlock";
import { Page } from "@svenskamodellen/components/Page";

export default async function IntegrityPage() {
  const markdown = await readFile(
    path.join(process.cwd(), "integritet.md"),
    "utf8",
  );

  return (
    <Page>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Svenska modellen</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/integritet">Integritet</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Main>
        <Container className="flex flex-col items-start gap-y-8">
          <MarkdownProseBlock
            markdown={markdown}
            className="w-full"
          />
        </Container>
      </Main>
      <Footer
        sourceCode={[
          "svenskamodellen/svenskamodellen.github.io",
          "svenskamodellen/components",
        ]}
      />
    </Page>
  );
}
