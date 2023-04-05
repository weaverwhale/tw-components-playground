import {
  Flex,
  Container,
  Button,
  useErrorBoundary,
} from "@weaverwhale/tw-components";

export default function BOMB() {
  const err = "You dropped a bomb in me 💣";
  const propExtras = { analyticsLabel: err };
  const { showBoundary } = useErrorBoundary();

  return (
    <div>
      <Container size="lg" align="center">
        <Flex
          gap="md"
          justify={{ base: "center" }}
          align="flex-start"
          direction="row"
          wrap="wrap"
          mb={20}
        >
          <Button
            variant="gradient"
            gradient={{ from: "red", to: "brown" }}
            size="xl"
            width="100%"
            {...propExtras}
            onClick={() => {
              showBoundary(new Error(err));
            }}
          >
            💣
          </Button>
        </Flex>
      </Container>
    </div>
  );
}
