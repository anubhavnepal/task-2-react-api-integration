import { render, screen, waitFor } from "@testing-library/react";
import UserGrid from "./UserGrid";
import { fetchData } from "../data/index";

// Mock the fetchData function
jest.mock("../data/index");

describe("UserGrid", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders users when data is fetched successfully", async () => {
    const mockUsers = [
      {
        id: 1,
        name: "Leanne Graham",
        avatar: "https://i.pravatar.cc/150?img=1",
        address: { city: "Gwenborough", geo: { lat: "-37.3159", lng: "81.1496" } },
        company: { name: "Romaguera-Crona", bs: "harness real-time e-markets" },
        email: "leanne@example.com",
        phone: "1-770-736-8031 x56442",
      },
    ];
    fetchData.mockResolvedValue(mockUsers);

    render(<UserGrid />);

    await waitFor(() => {
      expect(screen.getByTestId("header")).toHaveTextContent("Users Details");
      expect(screen.getByText(/Leanne Graham/i)).toBeInTheDocument();
    });
  });

  it("shows loading state while fetching data", () => {
    fetchData.mockReturnValue(new Promise(() => {}));

    render(<UserGrid />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("shows error message when fetch fails", async () => {
    fetchData.mockRejectedValue(new Error("Failed to fetch"));

    render(<UserGrid />);
    expect(await screen.findByTestId("error")).toHaveTextContent("Error:");
  });
});
